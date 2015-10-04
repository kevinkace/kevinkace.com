// jshint node:true
"use strict";

var argv      = require("yargs").argv,
    _         = require("lodash"),
    gulp      = require("gulp"),
    file      = require("gulp-file"),
    less      = require("gulp-less"),
    minify    = require("gulp-minify-css"),
    rename    = require("gulp-rename"),
    gutil     = require("gulp-util"),
    strip     = require("gulp-strip-comments"),
    replace   = require("gulp-replace"),
    rename    = require("gulp-rename"),
    cssBeaut  = require("gulp-cssbeautify"),
    rework    = require("rework"),
    pureGrids = require("rework-pure-grids"),
    lessOpts  = require("./lessOpts.js"),
    ensureEm  = require("./build/ensureem.js");

gulp.task("less:watch", function() {
    return gulp.watch([ "./less/**/*.less", "./lessOpts.js" ], [ "less" ]);
});

gulp.task("less", [ "lessSizes" ], function() {
    return gulp.src(lessOpts.src)
        .pipe(less({ paths : lessOpts.paths }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("less:prod",[ "lessSizes" ] , function() {
    return gulp.src(lessOpts.src)
        .pipe(less({ paths : lessOpts.paths }))
        .pipe(minify())
        .pipe(rename({ suffix : ".min" }))
        .pipe(gulp.dest("./public/css"));
});

// Generate a less file with vars for breakpoints.
gulp.task("lessSizes", [ "lessPureGridBase", "lessPureGrid" ], function() {
    var lessSizes = Object.keys(lessOpts.mediaQueries)
            .reduce(function(prev, curr) {
                var sizeDef = {
                        size  : curr,
                        width : ensureEm(lessOpts.mediaQueries[curr], lessOpts.basePx)
                    };

                return prev.concat(_.template("@<%= size %>: <%= width %>;\n")(sizeDef));
            }, "");

    return file("sizes.less", lessSizes, { src : true })
        .pipe(gulp.dest("./less/vars"));
});

// Lessify Pure base grid
gulp.task("lessPureGridBase", function() {
    return gulp.src("./node_modules/purecss/build/grids-core.css")
        .pipe(strip())
        .pipe(replace("pure-", lessOpts.prefix + "-"))
        .pipe(cssBeaut())
        .pipe(rename("pureGridBase.less"))
        .pipe(gulp.dest("./less"));
});

// Generate less pure grid file
gulp.task("lessPureGrid", function() {
    return file("pureGrid.less",
        rework("")
            .use(pureGrids.units(
                lessOpts.units,
                {
                    mediaQueries : _.mapValues(lessOpts.mediaQueries, function(size) {
                        return "screen and (min-width: " + ensureEm(size, lessOpts.basePx) + ")";
                    }),
                    selectorPrefix : "." + lessOpts.prefix + "-u-"
                }
            )).toString(), { src : true })
        .pipe(gulp.dest("./less"));
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
