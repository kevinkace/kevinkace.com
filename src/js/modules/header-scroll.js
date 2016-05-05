"use strict";

var h = document.getElementById("header"),
    c = window.getComputedStyle(h).backgroundColor,
    a = c.match(/([0-9]+\.*[0-9]*)/g).map(function(num) {
            return parseFloat(num, 10);
        }),

    s = {},
    p,
    style;

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}

module.exports = () => {
    window.addEventListener("scroll", (e) => {
        style = "";
        p = Math.round(clamp(window.scrollY, 0, window.innerHeight) / window.innerHeight * 100) / 100;

        s["font-size"] = `${(1 - (p / 2))}em; `;
        s["background-color"] = `rgba(${a[0]}, ${a[1]}, ${a[2]}, ${(a[3] + (p * (0.9 - a[3])))});`;

        Object.keys(s).forEach((prop) => {
            style = `${style} ${prop}: ${s[prop]}`;
        });

        h.setAttribute("style", style);
    });
};
