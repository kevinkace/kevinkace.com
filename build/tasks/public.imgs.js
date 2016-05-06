"use strict";

/* todo:
    - delete all files from public
    - compress source
    - hash source
    - update references
    - move to public
*/
module.exports = (gulp) => {
    return () => {
        return gulp.src("./src/imgs/*")
            .pipe(gulp.dest("./public/imgs"));
    };
};
