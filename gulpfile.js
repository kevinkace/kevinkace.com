"use strict";

var _          = require("lodash"),

    buildOpts  = require("./build/opts.js"),

    gulp       = require("gulp"),
    plugins    = require("gulp-load-plugins")(),
    gutil      = require("gulp-util"),

    watchify   = require("watchify"),
    browserify = require("browserify"),
    source     = require("vinyl-source-stream"),
    buffer     = require("vinyl-buffer"),
    sourcemaps = require("gulp-sourcemaps"),

    bOpts      = _.assign({}, watchify.args, buildOpts.browserify),
    b          = watchify(browserify(bOpts)),

    gls        = require("gulp-live-server"),
    server     = gls.new("./app/index.js");


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

function requireTask(task) {
    return require(`./build/tasks/${task}`)(gulp, plugins, _.merge({}, { cwd : __dirname }, buildOpts));
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


gulp.task("js:bundle", bundle);


gulp.task("dev",
    [
    // todo: fix this order
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
        "less:compile",
        "public",
        "startApp",
        "js:watch"
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
gulp.task("src:fontAwesome", requireTask("src.fontAwesome"));

// PURE | NPM -> SRC
gulp.task("src:pureBase", requireTask("src.pureBase"));

// GEN | PURE GRIDS -> SRC
gulp.task("less:grids", requireTask("less.grids"));

// GEN | LESS SIZES -> SRC
gulp.task("less:breakpoints", requireTask("less.breakpoints"));

// GEN | MEDIA QUERIES -> SRC
gulp.task("less:mediaQueries", requireTask("less.mediaQueries"));

// LESS | COMPILE -> PUBLIC
gulp.task("less:compile", requireTask("less.compile"));

// FONTS | SRC -> PUBLIC
gulp.task("public:fonts", requireTask("public.fonts"));

// IMG | SRC -> PUBLIC
gulp.task("public:imgs", requireTask("public.imgs"));

// JS | BUNDLE -> PUBLIC
gulp.task("js:bundle", requireTask("js.bundle"));

gulp.task("js:watch", () => {
    bundle();
});

gulp.task("less:prod",
    [
        "less:compile"
    ],
    requireTask("less.prod")
);

gulp.task("js:prod",
    [
        "js:bundle"
    ],
    requireTask("js.prod")
);

// todo: going to need more here
gulp.task("prod", [
        "less:prod",
        "js:prod"
    ],
    () => {
        return;
    }
);
