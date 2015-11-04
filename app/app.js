// jshint node: true
"use strict";

var fs         = require("fs"),
    async      = require("async"),
    express    = require("express"),
    app        = module.exports = express(),
    Remarkable = require("remarkable"),
    md         = new Remarkable({ html : true }),
    data       = {
        code     : require("./data/code"),
        footer   : require("./data/footer"),
        sections : require("./data/sections")
    };

async.waterfall([
    function setData(cb) {
        cb(null, data);
    },
    function getLongDesc(state, cb) {
        console.log("Loading data");
        async.each(state.code.projects, function(proj, cb) {
            var path = "./app/data/" + proj.descKey;

            fs.readFile(path, "utf-8", function(err, data) {
                if(err) {
                    console.log("Error reading " + path);
                    proj.longDesc = path;
                    return cb();
                }

                proj.longDesc = md.render(data);
                cb();
            });
        }, function(err) {
            if(err) {
                // this will never run
                console.log(err + " not loaded");
            }
            cb(null, state);
        });
    },
    function getSiteContent(state, cb) {
        console.log("Loading content");
        var path = "./app/data/" + state.sections.intro.contentKey;
        fs.readFile(path, "utf-8", function(err, data) {
            if(err) {
                state.sections.intro.content = state.sections.intro.contentKey;
                console.log("Error reading" + path);
                return cb(null, state);
            }

            state.sections.intro.content = md.render(data);
            cb(null, state);
        });
    },
    function runApp(state, cb) {
        console.log("Start app");
        app.set("view engine", "jade");
        app.set("views", "./app/views");

        if(app.get("env") === "development") {
            app.locals.pretty = true;
        }

        app
            .get("/", [
                function(req, res) {
                    res.render("pages/home", state);
                }
            ])
            .use(express.static("./public"));
    }
]);
