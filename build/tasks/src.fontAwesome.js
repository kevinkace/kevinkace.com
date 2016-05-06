"use strict";

var merge = require("merge-stream");

module.exports = (gulp) => {
    return () => {
        var tasks = [ "less", "fonts" ].map((dir) => {
                return gulp.src(`./node_modules/font-awesome/${dir}/*`)
                .pipe(gulp.dest(`./src/libs/font-awesome/${dir}`));
            });

        return merge(tasks);
    };
};
