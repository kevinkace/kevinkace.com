"use strict";

module.exports = (gulp, plugins, config) => {
    return () => {
        gulp.watch("./src/less/**/*.less", [ "less:compile" ]);
        gulp.watch("./src/img/**", [ "public:img" ]);
        gulp.watch("./app/**", () => {
            plugins.util.log("app change");
            config.server.start.bind(config.server)();
        });

        gulp.watch("./public/**", (currFile) => {
            config.server.notify(currFile);
        });
    };
};