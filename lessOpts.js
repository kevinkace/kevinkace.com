//jshint node: true
"use strict";

var path = require("path");

module.exports = {
    src    : "./less/*.less",
    prefix : "kace",
    units  : [ 24, 7, 5 ],
    basePx : 16,
    paths  : [
        path.join(
            __dirname,
            "./less/import"
        )
    ],
    mediaQueries : {
        p1 : "300px",
        p2 : "500px",
        tb : "768px",
        pc : "960px"
    }
};
