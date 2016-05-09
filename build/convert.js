"use strict";

const REGEX_FLOAT = /[0-9\.]*/;

function getPx(px) {
    let size = px || 0;

    if(typeof px === "string" && REGEX_FLOAT.test(px)) {
        size = parseFloat(px.match(REGEX_FLOAT)[0], 10);
    } else if(typeof px !== "number") {
        throw new Error(`pxToEm - first parameter must be string or number: ${px}`);
    }

    return size;
}

module.exports = {
    pxToEm  : (px, baseSize) => getPx(px) / getPx(baseSize || 16) + "em",
    pxToRem : (px, baseSize) => getPx(px) / getPx(baseSize || 16) + "rem"
};
