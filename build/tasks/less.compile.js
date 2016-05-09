"use strict";

var path = require("path");

module.exports = (gulp, plugins, config) => {
    return () => {
        return gulp.src("./src/less/*.less")
            .pipe(plugins.less({ paths : path.join(config.cwd, "./src/less/import") }))
            .pipe(plugins.autoprefixer(config.prefixer))
            .pipe(gulp.dest("./public/css"));
    };
};
