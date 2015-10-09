//jshint node: true
"use strict";

var path = require("path");

module.exports = {
    less : {
        src    : "./src/less/*.less",
        prefix : "kace",
        units  : [ 24, 7, 5 ],
        basePx : 16,
        paths  : [
            path.join(
                __dirname,
                "./src/less/import"
            )
        ],
        mediaQueries : {
            p1 : "300px",
            p2 : "500px",
            tb : "768px",
            pc : "960px"
        }
    },
    prefixer : {
        browsers : [ "last 2 versions", "IE 7", "Chrome > 20" ],
        remove   : false
    }
};
