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
        async.each(state.code.projects, (proj, cb2) => {
            var dataPath = `./app/data/${proj.descPath}`;

            fs.readFile(dataPath, "utf-8", (err, fileData) => {
                if(err) {
                    console.log(`Error reading ${path}`);
                    proj.longDesc = dataPath;
                    // Don't call cb with err, use path as data
                    return cb2();
                }

                proj.longDesc = md.render(fileData);
                return cb2();
            });
        },

        function(err) {
            if(err) {
                // this will never run
                console.log(`${err} not loaded`);
            }

            cb(null, state);
        });
    },

    function getSectionContent(state, cb) {
        console.log("Loading content");
        state.sections = {};
        glob("./app/data/*.md", {}, (err, files) => {
            if(err) {
                console.log("err readdir");
                return;
            }

            async.each(files, (file, cb2) => {
                fs.readFile(file, "utf-8", (readErr, fileData) => {
                    if(readErr) {
                        console.log(`Error reading ${file}`);
                        state.sections[path.parse(file).name] = file;
                        return cb2();
                    }

                    state.sections[path.parse(file).name] = md.render(fileData);
                    return cb2();
                });
            },

            (readErr) => {
                if(readErr) {
                    // this will never run
                    console.log(`${readErr} not loaded`);
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

        app.get("/ok", [
            (req, res) => {
                    res.send({ body : "what" });
                }
            ]);
    }
]);
