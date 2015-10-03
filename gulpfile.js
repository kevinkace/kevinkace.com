// jshint node:true
"use strict";

var argv      = require("yargs").argv,
    gulp      = require("gulp"),
    less      = require("gulp-less"),
    minify    = require("gulp-minify-css"),
    rename    = require("gulp-rename"),
    entryFile = "./less/**/kevinkace.less";


gulp.task("less", function() {
    return gulp.src(entryFile)
        .pipe(less({
            paths : [ "./less/import" ]
        }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("less:watch", function() {
    return gulp.watch("./less/**/*.less", [ "less" ]);
});

gulp.task("less:prod", function() {
    return gulp.src(entryFile)
        .pipe(less({
            paths : [ "./less/import" ]
        }))
        .pipe(minify())
        .pipe(rename({ suffix : ".min" }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("default", function() {
    if(argv.watch) {
        return gulp.start("less:watch");
    } else if(argv.prod) {
        return gulp.start("less:prod");
    } else {
        return gulp.start("less");
    }
});
