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
    cssBeaut  = require("gulp-cssbeautify"),
    prefixer  = require("gulp-autoprefixer"),
    rework    = require("rework"),
    pureGrids = require("rework-pure-grids"),
    lessOpts  = require("./lessOpts.js"),
    ensureEm  = require("./build/ensureem.js"),
    prefixOpts = {
        browsers : [ "last 2 versions", "IE 7", "Chrome > 20" ],
        remove   : false
    };

gulp.task("less:watch", function() {
    return gulp.watch([ "./less/**/*.less", "./lessOpts.js" ], [ "less" ]);
});

gulp.task("less", [ "lessSizes" ], function() {
    return gulp.src(lessOpts.src)
        .pipe(less({ paths : lessOpts.paths }))
        .pipe(prefixer(prefixOpts))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("less:prod",[ "lessSizes" ] , function() {
    return gulp.src(lessOpts.src)
        .pipe(less({ paths : lessOpts.paths }))
        .pipe(prefixer(prefixOpts))
        .pipe(minify())
        .pipe(rename({ suffix : ".min" }))
        .pipe(gulp.dest("./public/css"));
});

// Generate less file for breakpoints
gulp.task("lessSizes", [ "lessPure", "lessPureGrid", "lessMediaQueries" ], function() {
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

// Lessify Pure base files
gulp.task("lessPure", function() {
    return gulp.src([
            "./node_modules/purecss/build/*.css",
            "!./node_modules/purecss/build/*-min.css",
            "!./node_modules/purecss/build/*-nr.css",
            "!./node_modules/purecss/build/pure*.css",
            "!./node_modules/purecss/build/grids.css",
            "!./node_modules/purecss/build/grids-responsive*.css",
            "!./node_modules/purecss/build/grids-units*.css"
        ])
        .pipe(strip())
        .pipe(replace("pure", lessOpts.prefix))
        .pipe(cssBeaut())
        .pipe(rename({ extname : ".less" }))
        .pipe(gulp.dest("./less/pure"));
});

// Generate less pure grids file from breakpoints in lessOpts.js
gulp.task("lessPureGrid", function() {
    var lessPureGrid = rework("")
            .use(pureGrids.units(
                lessOpts.units,
                {
                    selectorPrefix : _.template(".<%- prefix %>-u-")({ prefix : lessOpts.prefix }),
                    mediaQueries   : _.mapValues(lessOpts.mediaQueries, function(size) {
                            return _.template("screen and (min-width: <%= lessSize %>)")({ lessSize : ensureEm(size, lessOpts.basePx) });
                        })
                }
            ))
            .toString();

    return file("grids-responsive.less", lessPureGrid, { src : true })
        .pipe(gulp.dest("./less/pure"));
});

// Generate less shorthands for media queries
gulp.task("lessMediaQueries", function() {
    var lessMediaQueries = _.reduce(lessOpts.mediaQueries, function(prev, curr, idx) {
            return prev.concat(_.template(".<%= size %>(@rules) {\n\t@media screen and (min-width: @<%- size %>) {\n\t\t@rules();\n\t}\n}\n\n")({ size : idx }));
        }, "");

    return file("media-queries.less", lessMediaQueries, { src : true })
        .pipe(replace("\t", "    "))
        .pipe(gulp.dest("./less/mixins"));
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
