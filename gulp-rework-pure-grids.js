//jshint node: true
"use strict";

var fs        = require("fs"),
    rework    = require("rework"),
    pureGrids = require("rework-pure-grids");

    fs.writeFile(
        "./less/grid.less",
        rework("")
            .use(pureGrids.units([5, 7, 24], {
                mediaQueries : {
                    sm : "screen and (min-width: @sm)",
                    md : "screen and (min-width: 48em)",
                    lg : "screen and (min-width: 64em)",
                    xl : "screen and (min-width: 75em)"
                },
                selectorPrefix : ".kace-u-"
            })).toString(),
        function(err) {
            if(err) {
                console.log("err writing file");
                return console.log(err);
            }
            console.log("file was written");
        }
    );
