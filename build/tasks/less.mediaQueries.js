"use strict";

var _ = require("lodash");

module.exports = (gulp, plugins, config) => {
    return () => {
    var mediaQueries = _.reduce(config.less.mediaQueries, (prev, curr, idx) => {
            var mq =
`.bp-<%= size %>(@rules) {
    @media screen and (min-width: @bp-<%- size %>) {
        @rules();
    }
}\n\n`;

            return prev.concat(_.template(mq)({ size : idx }));
        }, "");

    return plugins.file("media-queries.less", mediaQueries, { src : true })
        .pipe(plugins.replace("\t", "    "))
        .pipe(gulp.dest("./src/less/mixins"));
    };
};
