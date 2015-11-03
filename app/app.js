// jshint node: true
"use strict";

var async      = require("async"),
    express    = require("express"),
    app        = module.exports = express(),
    Remarkable = require("remarkable"),
    md         = new Remarkable({
    }),
    data    = {
        code   : require("./data/code"),
        footer : require("./data/footer")
    };



async.waterfall([
    function setData(cb) {
        cb(null, data);
    },
    function getLongDesc(data, cb) {
        async.parallel([]);
        data.code.projects.forEach(function(proj) {
            if(!proj.descKey) {
                proj.longDesc = proj.desc || proj.descKey;
                return cb(null, data);
            }

            proj.longDesc = md.render(require("./data/" + proj.descKey));
        });
    },
    function runApp(data, cb) {
        app.set("view engine", "jade");
        app.set("views", "./app/views");

        if(app.get("env") === "development") {
            app.locals.pretty = true;
        }

        app
            .get("/", function(req, res) {
                res.render("pages/home", data);
            })
            .use(express.static("./public"));

        app
            .get("/code", function(req, res) {
                res.render("pages/code", data);
            })
            .use(express.static("./public"));
    }
], function(err, result) {
    if(err) {
        console.log("Crap");
    }
});


