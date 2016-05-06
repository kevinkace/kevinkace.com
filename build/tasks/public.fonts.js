"use strict";

module.exports = (gulp) => {
    return () => {
        return gulp.src([
                "./src/libs/font-awesome/fonts/*",
                "./src/libs/google-fonts/fonts/*"
            ])
            .pipe(gulp.dest("./public/fonts"));
    };
};
