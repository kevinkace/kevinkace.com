"use strict";

var browserify = require("browserify"),
    source     = require("vinyl-source-stream"),
    buffer     = require("vinyl-buffer");

module.exports = (gulp, plugins, config) => {
    return () => {
        browserify(config.browserify)
            .transform("babelify", { presets : [ "es2015" ] })
            .bundle()
            .on("error", plugins.util.log.bind(plugins.util, "Browserify error"))
            .pipe(source("index.js"))
            .pipe(buffer())
            .pipe(gulp.dest("./public/js"));
    };
};
