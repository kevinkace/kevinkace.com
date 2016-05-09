"use strict";

var defaults  = require("lodash.defaults"),

    buildOpts = require("./build/opts.js"),

    gulp    = require("gulp"),
    plugins = require("gulp-load-plugins")(),

    gls    = require("gulp-live-server"),
    server = gls.new("./app/index.js");


function requireTask(task, opts) {
    return require(`./build/tasks/${task}`)(gulp, plugins, defaults({}, buildOpts, opts));
}


gulp.task("default", [ "dev" ], () => {
        return;
    }
);


gulp.task("startApp", () => {
    server.start();
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
        "public:img",
        "less:compile",
        "public",
        "startApp",
        "js:watch"
    ],
    requireTask("dev.watch", { server : server })
);


// prod/live
// todo: going to need more here
gulp.task("prod", [
        "less:prod",
        "js:prod"
    ],
    () => {
        return;
    }
);

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

// src, public
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
        "public:img",
        "public:fonts"
    ],
    () => {
        return;
    }
);


gulp.task("src:fontAwesome", requireTask("src.fontAwesome"));

gulp.task("src:pureBase", requireTask("src.pureBase"));

gulp.task("less:grids", requireTask("less.grids"));

gulp.task("less:breakpoints", requireTask("less.breakpoints"));

gulp.task("less:mediaQueries", requireTask("less.mediaQueries"));

gulp.task("less:compile", requireTask("less.compile", { cwd : __dirname }));

gulp.task("public:fonts", requireTask("public.fonts"));

gulp.task("public:img", requireTask("public.img"));

gulp.task("js:bundle", requireTask("js.bundle"));

gulp.task("js:watch", requireTask("js.watch"));
