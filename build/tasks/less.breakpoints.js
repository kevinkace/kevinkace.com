"use strict";

var convert = require("../convert");

module.exports = (gulp, plugins, config) => {
    return () => {
        var breakpoints = Object.keys(config.less.mediaQueries)
            .reduce((prev, curr) => {
                var width = convert.pxToEm(config.less.mediaQueries[curr], config.less.basePx);

                return prev.concat(`@bp-${curr}: ${width};\n`);
            }, "");

        return plugins.file("breakpoints.less", breakpoints, { src : true })
            .pipe(gulp.dest("./src/less/vars"));
    };
};
