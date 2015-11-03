// jshint node: true
"use strict";

var fs         = require("fs"),
    async      = require("async"),
    express    = require("express"),
    app        = module.exports = express(),
    Remarkable = require("remarkable"),
    md         = new Remarkable({
    }),
    data       = {
        code   : require("./data/code"),
        footer : require("./data/footer")
    };



// async.waterfall([
//     function setData(cb) {
//         cb(null, data);
//     },
//     function getLongDesc(data, cb) {
//         async.each(data.code.projects, function(proj, cb) {
//             fs.readFile("./data/" + proj.descKey, "utf-8", function(data, err) {
//                 if(err) {
//                     console.log("err reading " + proj.descKey);
//                     proj.longDesc = proj.descKey;
//                     cb();
//                 }

//                 proj.longDesc = data;
//                 console.log("loaded " + proj.descKey);
//                 cb();
//             });
//         }, function(err) {
//             if(err) {
//                 // this will never run
//                 console.log(err + " not loaded");
//             }
//             cb();
//         });
//     },
//     function runApp(data, cb) {


    async.each(data.code.projects, function(proj, cb) {
        var path = "./app/data/" + proj.descKey;

        fs.readFile(path, "utf-8", function(err, data) {
            if(err) {
                console.log("err reading " + path);
                proj.longDesc = path;
                return cb(path);
            }

            proj.longDesc = data;
            console.log("loaded " + path);
            cb();
        });
    }, function(err) {
        if(err) {
            // this will never run
            console.log(err + " not loaded");
        }
        runApp();
    });

    function runApp() {
        console.log("app aboot to run.");
        app.set("view engine", "jade");
        app.set("views", "./app/views");

        if(app.get("env") === "development") {
            app.locals.pretty = true;
        }

        app
            .get("/", [
                function(req, res) {
                    res.render("pages/home", data);
                }
            ])
            .use(express.static("./public"));
    }

//     }
// ], function(err, result) {
//     if(err) {
//         console.log(err);
//     }
// });


