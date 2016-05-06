"use strict";

module.exports = (gulp, plugins) => {
    return () => {
        return gulp.src([
                "./public/js/*.js"
            ])
           .pipe(plugins.minifier({
                minify   : true,
                minifyJS : true
            }))
            .pipe(plugins.rename({ suffix : ".min" }))
            .pipe(gulp.dest("./public/js"));
    };
};
