"use strict";

module.exports = (gulp, plugins) => {
    return () => {
        return gulp.src([
                "./public/css/*.css",
                "!./public/css/*.min.css"
            ])
            .pipe(plugins.cleanCss({ keepSpecialComments : 0 }))
            .pipe(plugins.rename({ suffix : ".min" }))
            .pipe(gulp.dest("./public/css"));
    };
};
