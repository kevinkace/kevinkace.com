// jshint node: true
"use strict";

var fs         = require("fs"),
    path       = require("path"),
    async      = require("async"),
    glob       = require("glob"),
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
            var path = "./app/data/" + proj.descPath;

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
    function getSectionContent(state, cb) {
        console.log("Loading content");
        state.sections = {};
        glob("./app/data/*.md", {},  function(err, files) {
            if(err) {
                console.log("err readdir");
                return;
            }
            async.each(files, function(file, cb) {
                fs.readFile(file, "utf-8", function(err, data) {
                    if(err) {
                        console.log("Error reading " + file);
                        state.sections[path.parse(file).name] = file;
                        return cb();
                    }
                    state.sections[path.parse(file).name] = md.render(data);
                    cb();
                });
            }, function(err) {
                if(err) {
                    // this will never run
                    console.log(err + " not loaded");
                }
                cb(null, state);
            });
        });
    },
    function runApp(state) {
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
