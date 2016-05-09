"use strict";

var convert = require("../convert"),

    _ = require("lodash"),

    rework     = require("rework"),
    pureGrids  = require("rework-pure-grids");

module.exports = (gulp, plugins, config) => {
    return () => {
        var grids = rework("")
            .use(pureGrids.units(
                config.less.units,
                {
                    selectorPrefix : `.${config.less.prefix}-u-`,
                    mediaQueries   : _.mapValues(config.less.mediaQueries, (size) => {
                            return `screen and (min-width: ${convert.pxToEm(size, config.less.basePx)})`;
                        })
                }
            ))
            .toString();

        return plugins.file("grids-responsive.less", grids, { src : true })
            .pipe(gulp.dest("./src/libs/pure"));
    };
};
