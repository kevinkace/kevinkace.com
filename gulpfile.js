"use strict";

var _          = require("lodash"),
    path       = require("path"),

    buildOpts  = require("./build/opts.js"),

    gulp       = require("gulp"),
    file       = require("gulp-file"),
    rename     = require("gulp-rename"),
    gutil      = require("gulp-util"),
    strip      = require("gulp-strip-comments"),
    replace    = require("gulp-replace"),

    less       = require("gulp-less"),
    minify     = require("gulp-minify-css"),
    cssBeaut   = require("gulp-cssbeautify"),
    prefixer   = require("gulp-autoprefixer"),
    rework     = require("rework"),
    pureGrids  = require("rework-pure-grids"),
    merge      = require("merge-stream"),
    ensureEm   = require("./build/ensureem.js"),

    watchify   = require("watchify"),
    browserify = require("browserify"),
    source     = require("vinyl-source-stream"),
    buffer     = require("vinyl-buffer"),
    sourcemaps = require("gulp-sourcemaps"),

    gls        = require("gulp-live-server"),
    server     = gls.new("./app/index.js"),

    bOpts      = _.assign({}, watchify.args, buildOpts.browserify),
    b          = watchify(browserify(bOpts));


function bundle() {
    return b.bundle()
        .on("error", gutil.log.bind(gutil, "Browserify error"))
        .pipe(source("index.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps : true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./public/js"));
}


gulp.task("default",
    [ "dev" ],
    () => {
        return;
    }
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
    () => {
        return;
    }
);


gulp.task("public",
    [
        "public:imgs",
        "public:fonts"
    ],
    () => {
        return;
    }
);


gulp.task("js:bundle",
    [
        "js:prep"
    ],
    bundle
);


gulp.task("js:prep", () => {
    b.on("log", gutil.log);
    b.transform("babelify", { presets : [ "es2015" ] });

    return;
});


gulp.task("dev",
    [
        "less:compile",
        "public",
        "startApp",
        "js:bundle"
    ],
    () => {
        return;
    }
);


gulp.task("dev:watch",
    [
        "dev"
    ],
    () => {
        b.on("update", bundle);

        gulp.watch("./src/less/**/*.less", [ "less:compile" ]);
        gulp.watch("./src/imgs/*", [ "public:imgs" ]);
        gulp.watch("./app/**", () => {
            gutil.log("app change");
            server.start.bind(server)();
        });

        gulp.watch("./public/**", (currFile) => {
            server.notify(currFile);
        });
    }
);


// APP | START
gulp.task("startApp", () => {
    server.start();
});


// FONTAWESOME | NPM -> SRC
gulp.task("src:fontAwesome", () => {
    var tasks = [ "less", "fonts" ].map((dir) => {
            return gulp.src(_.template(`./node_modules/font-awesome/${dir}/*`))
            .pipe(gulp.dest(`./src/libs/font-awesome/${dir}`));
        });

    return merge(tasks);
});

// PURE | NPM -> SRC
gulp.task("src:pureBase", () => {
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
        .pipe(replace("pure", buildOpts.less.prefix))
        .pipe(cssBeaut())
        .pipe(rename({ extname : ".less" }))
        .pipe(gulp.dest("./src/libs/pure"));
});

// ANIMATIC | NPM -> SRC
gulp.task("src:animatic", () => {
    return gulp.src([
            "./node_modules/animatic/animatic.js"
        ])
        .pipe(gulp.dest("./src/libs/animatic"));
});

// GEN | PURE GRIDS -> SRC
gulp.task("less:grids", () => {
    var grids = rework("")
            .use(pureGrids.units(
                buildOpts.less.units,
                {
                    selectorPrefix : _.template(".<%- prefix %>-u-")({ prefix : buildOpts.less.prefix }),
                    mediaQueries   : _.mapValues(buildOpts.less.mediaQueries, (size) => {
                            return _.template("screen and (min-width: <%= lessSize %>)")({ lessSize : ensureEm(size, buildOpts.less.basePx) });
                        })
                }
            ))
            .toString();

    return file("grids-responsive.less", grids, { src : true })
        .pipe(gulp.dest("./src/libs/pure"));
});

// GEN | LESS SIZES -> SRC
gulp.task("less:breakpoints", () => {
    var breakpoints = Object.keys(buildOpts.less.mediaQueries)
            .reduce((prev, curr) => {
                var sizeDef = {
                        size  : curr,
                        width : ensureEm(buildOpts.less.mediaQueries[curr], buildOpts.less.basePx)
                    };

                return prev.concat(_.template("@bp-<%= size %>: <%= width %>;\n")(sizeDef));
            }, "");

    return file("breakpoints.less", breakpoints, { src : true })
        .pipe(gulp.dest("./src/less/vars"));
});

// GEN | MEDIA QUERIES -> SRC
gulp.task("less:mediaQueries", () => {
    var mediaQueries = _.reduce(buildOpts.less.mediaQueries, (prev, curr, idx) => {
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
gulp.task("less:compile", () => {
    return gulp.src("./src/less/*.less")
        .pipe(less({ paths : path.join(__dirname, "./src/less/import") }))
        .pipe(prefixer(buildOpts.prefixer))
        .pipe(gulp.dest("./public/css"));
});

// FONTS | SRC -> PUBLIC
gulp.task("public:fonts", () => {
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
gulp.task("public:imgs", () => {
    return gulp.src("./src/imgs/*")
        .pipe(gulp.dest("./public/imgs"));
});

// gulp.task("less:prod", () => {
//     return gulp.src(buildOpts.less.src)
//         .pipe(less({ paths : buildOpts.less.paths }))
//         .pipe(prefixer(buildOpts.prefixer))
//         .pipe(minify())
//         .pipe(rename({ suffix : ".min" }))
//         .pipe(gulp.dest("./public/css"));
// });
