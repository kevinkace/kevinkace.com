//jshint node: true
"use strict";

module.exports = {
    less : {
        prefix : "kace",
        units  : [ 24, 7, 5 ],
        basePx : 16,
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
