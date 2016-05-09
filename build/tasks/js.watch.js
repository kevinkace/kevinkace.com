"use strict";

var _ = require("lodash"),

    source     = require("vinyl-source-stream"),
    buffer     = require("vinyl-buffer"),
    sourcemaps = require("gulp-sourcemaps"),

    watchify   = require("watchify"),
    browserify = require("browserify");

module.exports = (gulp, plugins, config) => {
    var bOpts = _.assign({}, watchify.args, config.browserify),
        b     = watchify(browserify(bOpts));

    function bundle() {
        return b.bundle()
            .on("error", plugins.util.log.bind(plugins.util, "Browserify error"))
            .pipe(source("index.js"))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps : true }))
            .pipe(sourcemaps.write("./"))
            .pipe(gulp.dest("./public/js"));
    }

    bundle();

    return () => {
        b.on("log", plugins.util.log);
        b.transform("babelify", { presets : [ "es2015" ] });
        b.on("update", bundle);
        bundle();
    };
};
