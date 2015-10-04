// jshint node:true
"use strict";

var argv      = require("yargs").argv,
    _         = require("lodash"),
    gulp      = require("gulp"),
    file      = require("gulp-file"),
    less      = require("gulp-less"),
    minify    = require("gulp-minify-css"),
    rename    = require("gulp-rename"),
    path      = require("path"),
    entryFile = "./less/**/kevinkace.less",
    lessCfg   = {
        paths : [
            path.join(
                __dirname,
                "./less/import",
                "./purecss/build"
            )
        ]
    },
    lessOpts = {
        units : [
            24,
            7,
            5
        ],
        mediaQueries : {
            p1 : "300px",
            p2 : "500px",
            tb : "768px",
            pc : "960px"
        },
        prefix : "kace",
        basePx : 16
    };

gulp.task("less", [ "lessSizes" ], function() {
    return gulp.src(entryFile)
        .pipe(less(lessCfg))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("less:prod", function() {
    return gulp.src(entryFile)
        .pipe(less(lessCfg))
        .pipe(minify())
        .pipe(rename({ suffix : ".min" }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("less:watch", [ "lessSizes" ], function() {
    return gulp.watch("./less/**/*.less", [ "less" ]);
});

gulp.task("lessSizes", function() {
    var lessSizes = Object.keys(lessOpts.mediaQueries)
            .reduce(function(prev, curr) {
                var sizeDef = {
                        size  : curr,
                        width : /[0-9]*(px)$/.test(lessOpts.mediaQueries[curr]) ?
                            parseInt(lessOpts.mediaQueries[curr].replace(/(px)$/, ""), 10) / 16 + "em" :
                            lessOpts.mediaQueries[curr]
                    };

                return prev.concat(_.template("@<%= size %>: <%= width %>;\n")(sizeDef));
            }, "");

    return file("sizes.less", lessSizes, { src : true })
        .pipe(gulp.dest("./less/vars"));
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
