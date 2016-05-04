"use strict";

var argv       = require("yargs").argv,
    _          = require("lodash"),
    path       = require("path"),
    gulp       = require("gulp"),
    file       = require("gulp-file"),
    less       = require("gulp-less"),
    minify     = require("gulp-minify-css"),
    rename     = require("gulp-rename"),
    watchify   = require("watchify"),
    browserify = require("browserify"),
    source     = require("vinyl-source-stream"),
    buffer     = require("vinyl-buffer"),
    sourcemaps = require("gulp-sourcemaps"),
    gutil      = require("gulp-util"),
    strip      = require("gulp-strip-comments"),
    replace    = require("gulp-replace"),
    cssBeaut   = require("gulp-cssbeautify"),
    prefixer   = require("gulp-autoprefixer"),
    gls        = require("gulp-live-server"),
    server     = gls.new("./app/index.js"),
    rework     = require("rework"),
    pureGrids  = require("rework-pure-grids"),
    merge      = require("merge-stream"),
    opts       = require("./build/opts.js"),
    ensureEm   = require("./build/ensureem.js"),

    browserifyOpts = {
        entries : [ "./src/js/index.js" ],
        debug   : true
    },
    bOpts = _.assign({}, watchify.args, browserifyOpts),
    b     = watchify(browserify(bOpts));

gulp.task("default",
    [ "dev" ],
    function() { return; }
);


gulp.task("src",
    [
        "src:fontAwesome",
        "src:pureBase",
        "src:animatic",
        "less:grids",
        "less:breakpoints",
        "less:mediaQueries"
    ],
    function() { return; }
);

gulp.task("public",
    [
        "public:imgs",
        "public:fonts"
    ],
    function() { return; }
);


gulp.task("bundle", bundle);
b.on("update", bundle);
b.on("log", gutil.log);
b.transform("babelify", { presets : [ "es2015" ] });


function bundle() {
    return b.bundle()
        .on("error", gutil.log.bind(gutil, "Browserify error"))
        .pipe(source("index.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps : true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./public/js"));
}


gulp.task("dev",
    [
        "less:compile",
        "public",
        "startApp",
        "bundle"
    ],
    function() { return; }
);


gulp.task("dev:watch",
    [
        "dev"
    ],
    function() {
        gulp.watch("./src/less/**/*.less", [ "less:compile" ]);
        gulp.watch("./src/imgs/*",         [ "public:imgs" ]);
        gulp.watch("./app/**", function() {
            gutil.log("app change");
            server.start.bind(server)();
        });

        gulp.watch("./public/**", function(file) {
            server.notify.apply(server, [ file ]);
        });
    }
);


// APP | START
gulp.task("startApp", function() {
    server.start();
});


// FONTAWESOME | NPM -> SRC
gulp.task("src:fontAwesome", function() {
    var tasks = [ "less", "fonts" ].map(function(dir) {
            return gulp.src(_.template(`./node_modules/font-awesome/${dir}/*`))
            .pipe(gulp.dest(`./src/libs/font-awesome/${dir}`));
        });

    return merge(tasks);
});

// PURE | NPM -> SRC
gulp.task("src:pureBase", function() {
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

// ANIMATIC | NPM -> SRC
gulp.task("src:animatic", function() {
    return gulp.src([
            "./node_modules/animatic/animatic.js"
        ])
        .pipe(gulp.dest("./src/libs/animatic"));
});

// GEN | PURE GRIDS -> SRC
gulp.task("less:grids", function() {
    var grids = rework("")
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

    return file("grids-responsive.less", grids, { src : true })
        .pipe(gulp.dest("./src/libs/pure"));
});

// GEN | LESS SIZES -> SRC
gulp.task("less:breakpoints", function() {
    var breakpoints = Object.keys(opts.less.mediaQueries)
            .reduce(function(prev, curr) {
                var sizeDef = {
                        size  : curr,
                        width : ensureEm(opts.less.mediaQueries[curr], opts.less.basePx)
                    };

                return prev.concat(_.template("@bp-<%= size %>: <%= width %>;\n")(sizeDef));
            }, "");

    return file("breakpoints.less", breakpoints, { src : true })
        .pipe(gulp.dest("./src/less/vars"));
});

// GEN | MEDIA QUERIES -> SRC
gulp.task("less:mediaQueries", function() {
    var mediaQueries = _.reduce(opts.less.mediaQueries, function(prev, curr, idx) {
            return prev.concat(_.template(
`.bp-<%= size %>(@rules) {
    @media screen and (min-width: @bp-<%- size %>) {
        @rules();
    }
}\n\n`
            )({ size : idx }));
        }, "");

    return file("media-queries.less", mediaQueries, { src : true })
        .pipe(replace("\t", "    "))
        .pipe(gulp.dest("./src/less/mixins"));
});

// LESS | COMPILE -> PUBLIC
gulp.task("less:compile", function() {
    return gulp.src("./src/less/*.less")
        .pipe(less({ paths : path.join(__dirname, "./src/less/import") }))
        .pipe(prefixer(opts.prefixer))
        .pipe(gulp.dest("./public/css"));
});

// FONTS | SRC -> PUBLIC
gulp.task("public:fonts", function() {
    return gulp.src([
        "./src/libs/font-awesome/fonts/*",
        "./src/libs/google-fonts/fonts/*"
        ])
        .pipe(gulp.dest("./public/fonts"));
});

// IMG | SRC -> PUBLIC
/* todo:
    - delete all files from public
    - compress source
    - hash source
    - move to public
*/
gulp.task("public:imgs", function() {
    return gulp.src("./src/imgs/*")
        .pipe(gulp.dest("./public/imgs"));
});

// gulp.task("less:prod", function() {
//     return gulp.src(opts.less.src)
//         .pipe(less({ paths : opts.less.paths }))
//         .pipe(prefixer(opts.prefixer))
//         .pipe(minify())
//         .pipe(rename({ suffix : ".min" }))
//         .pipe(gulp.dest("./public/css"));
// });
