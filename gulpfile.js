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
    merge     = require("merge-stream"),
    opts      = require("./build/opts.js"),
    ensureEm  = require("./build/ensureem.js");


gulp.task(
    "default",
    [ "dev" ],
    function() {
        return;
    }
);

gulp.task(
    "src",
    [
        "fontAwesomeSrc",
        "pureBaseSrc",
        "pureGrid",
        "lessSizes",
        "lessMediaQueries"
    ],
    function() {
        return;
    }
);

// Move assets from src to public
gulp.task("moveAssets", function() {

});

gulp.task(
    "dev",
    [
        "lessc",
        "moveAssets"
    ],
    function() {
        return;
    }
);

gulp.task(
    "dev:watch",
    [ "lessc" ],
    function() {
        return gulp.watch([ "./src/less/**/*.less" ], [ "lessc" ]);
    }
);


// compile less from src to public
gulp.task("lessc", function() {
    return gulp.src(opts.less.src)
        .pipe(less({ paths : opts.less.paths }))
        .pipe(prefixer(opts.prefixer))
        .pipe(gulp.dest("./public/css"));
});

// gulp.task("less:prod", function() {
//     return gulp.src(opts.less.src)
//         .pipe(less({ paths : opts.less.paths }))
//         .pipe(prefixer(opts.prefixer))
//         .pipe(minify())
//         .pipe(rename({ suffix : ".min" }))
//         .pipe(gulp.dest("./public/css"));
// });

// Move Font Awesome files from node_modules to src
gulp.task("fontAwesomeSrc", function() {
    var faDirs = [ "less", "fonts" ],
        tasks  = faDirs.map(function(dir) {
            return gulp.src(_.template("./node_modules/font-awesome/<%- dir %>/*")({ dir : dir }))
                .pipe(gulp.dest("./src/libs/font-awesome/" + dir));
            });

    return merge(tasks);
});

// Lessify Pure base files from node_modules to src
gulp.task("pureBaseSrc", function() {
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
        .pipe(replace("pure", opts.less.prefix))
        .pipe(cssBeaut())
        .pipe(rename({ extname : ".less" }))
        .pipe(gulp.dest("./src/libs/pure"));
});

// Generate less pure grids file from breakpoints in opts.js
gulp.task("pureGrid", function() {
    var lessPureGrid = rework("")
            .use(pureGrids.units(
                opts.less.units,
                {
                    selectorPrefix : _.template(".<%- prefix %>-u-")({ prefix : opts.less.prefix }),
                    mediaQueries   : _.mapValues(opts.less.mediaQueries, function(size) {
                            return _.template("screen and (min-width: <%= lessSize %>)")({ lessSize : ensureEm(size, opts.less.basePx) });
                        })
                }
            ))
            .toString();

    return file("grids-responsive.less", lessPureGrid, { src : true })
        .pipe(gulp.dest("./src/libs/pure"));
});

// Generate less file for breakpoints to src
gulp.task("lessSizes", function() {
    var lessSizes = Object.keys(opts.less.mediaQueries)
            .reduce(function(prev, curr) {
                var sizeDef = {
                        size  : curr,
                        width : ensureEm(opts.less.mediaQueries[curr], opts.less.basePx)
                    };

                return prev.concat(_.template("@<%= size %>: <%= width %>;\n")(sizeDef));
            }, "");

    return file("sizes.less", lessSizes, { src : true })
        .pipe(gulp.dest("./src/less/vars"));
});

// Generate less shorthands for media queries
gulp.task("lessMediaQueries", function() {
    var lessMediaQueries = _.reduce(opts.less.mediaQueries, function(prev, curr, idx) {
            return prev.concat(_.template(".<%= size %>(@rules) {\n\t@media screen and (min-width: @<%- size %>) {\n\t\t@rules();\n\t}\n}\n\n")({ size : idx }));
        }, "");

    return file("media-queries.less", lessMediaQueries, { src : true })
        .pipe(replace("\t", "    "))
        .pipe(gulp.dest("./src/less/mixins"));
});
