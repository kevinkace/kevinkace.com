"use strict";

var header = {
        el    : document.getElementById("header"),
        style : {}
    },

    color  = window.getComputedStyle(header.el).backgroundColor,
    rgba   = color.match(/([0-9]+\.*[0-9]*)/g).map(function(num) {
            return parseFloat(num, 10);
        }),
    percent;

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

function reduceStyles(styleObj) {
    return Object.keys(styleObj).reduce((styles, prop) => {
        return `${styles} ${prop} : ${styleObj[prop]};`;
    }, "");
}

module.exports = () => {
    window.addEventListener("scroll", (e) => {
        percent = Math.round(clamp(window.scrollY, 0, window.innerHeight) / window.innerHeight * 100) / 100;

        header.style = {
            "background-color" : `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${(rgba[3] + (percent * (0.9 - rgba[3])))});`,
            "font-size"        : `${(1 - (percent / 2))}em;`
        };

        header.el.setAttribute("style", reduceStyles(header.style));
    });
};
