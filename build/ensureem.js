//jshint node: true
"use strict";
module.exports = function(sizeStr, fontSize) {
    fontSize = fontSize || 16;
    return /[0-9]*(px)$/.test(sizeStr) ?
        parseInt(sizeStr.replace(/(px)$/, ""), 10) / fontSize + "em" :
        sizeStr;
};
