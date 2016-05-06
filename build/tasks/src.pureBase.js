"use strict";

module.exports = (gulp, plugins, config) => {
    return () => {
        return gulp.src([
                "./node_modules/purecss/build/*.css",
                "!./node_modules/purecss/build/*-min.css",
                "!./node_modules/purecss/build/*-nr.css",
                "!./node_modules/purecss/build/pure*.css",
                "!./node_modules/purecss/build/grids.css",
                "!./node_modules/purecss/build/grids-responsive*.css",
                "!./node_modules/purecss/build/grids-units*.css"
            ])
            .pipe(plugins.stripComments())
            .pipe(plugins.replace("pure", config.less.prefix))
            .pipe(plugins.cssbeautify())
            .pipe(plugins.rename({ extname : ".less" }))
            .pipe(gulp.dest("./src/libs/pure"));
    };
};
