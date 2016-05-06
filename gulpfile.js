"use strict";

var _          = require("lodash"),

    buildOpts  = require("./build/opts.js"),

    gulp       = require("gulp"),
    plugins    = require("gulp-load-plugins")(),

    gls        = require("gulp-live-server"),
    server     = gls.new("./app/index.js");


function requireTask(task, opts) {
    var config = buildOpts;

    if(opts) {
        config = _.defaults({}, config, opts);
    }

    return require(`./build/tasks/${task}`)(gulp, plugins, config);
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
        "less:compile",
        "public",
        "startApp",
        "js:watch"
    ],
    requireTask("dev.watch", { server : server })
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
gulp.task("less:compile", requireTask("less.compile", { cwd : __dirname }));

// FONTS | SRC -> PUBLIC
gulp.task("public:fonts", requireTask("public.fonts"));

// IMG | SRC -> PUBLIC
gulp.task("public:imgs", requireTask("public.imgs"));

// JS | BUNDLE -> PUBLIC
gulp.task("js:bundle", requireTask("js.bundle"));

gulp.task("js:watch", requireTask("js.watch"));

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
