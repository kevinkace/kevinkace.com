"use strict";

var ensureEm = require("../ensureem");

module.exports = (gulp, plugins, config) => {
    return () => {
        var breakpoints = Object.keys(config.less.mediaQueries)
            .reduce((prev, curr) => {
                var width = ensureEm(config.less.mediaQueries[curr], config.less.basePx);

                return prev.concat(`@bp-${curr}: ${width};\n`);
            }, "");

        return plugins.file("breakpoints.less", breakpoints, { src : true })
            .pipe(gulp.dest("./src/less/vars"));
    };
};
