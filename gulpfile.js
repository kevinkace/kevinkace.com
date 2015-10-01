"use strict";

var gulp      = require("gulp"),
    sass      = require("gulp-sass"),
    bourbon   = require("node-bourbon"),
    entryFile = "./sass/**/kevinkace.scss";

gulp.task("sass", function() {
    gulp.src(entryFile)
        .pipe(sass({
            includePaths : bourbon.includePaths
        }))//.on("error", sass.logError))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("sass:watch", function() {
    gulp.watch("./sass/**/*.scss", [ "sass" ]);
});

gulp.task("default", function() {
    gulp.start("sass");
});
