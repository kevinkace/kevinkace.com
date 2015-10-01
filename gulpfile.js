"use strict";

var argv      = require("yargs").argv,
    gulp      = require("gulp"),
    sass      = require("gulp-sass"),
    minify    = require("gulp-minify-css"),
    rename    = require("gulp-rename"),
    bourbon   = require("node-bourbon"),
    neat      = require("node-neat"),
    entryFile = "./sass/**/kevinkace.scss";


gulp.task("sass", function() {
    return gulp.src(entryFile)
        .pipe(sass({ includePaths : bourbon.includePaths }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("sass:watch", function() {
    return gulp.watch("./sass/**/*.scss", [ "sass" ]);
});

gulp.task("sass:prod", function() {
    return gulp.src(entryFile)
        .pipe(sass({ includePaths : bourbon.includePaths }))
        .pipe(minify())
        .pipe(rename({ suffix : ".min" }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("default", function() {
    if(argv.watch) {
        return gulp.start("sass:watch");
    } else if(argv.prod) {
        return gulp.start("sass:prod");
    } else {
        return gulp.start("sass");
    }
});
