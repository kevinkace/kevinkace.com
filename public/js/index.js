(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var h = document.getElementById("header"),
    c = window.getComputedStyle(h).backgroundColor,
    a = c.match(/([0-9]+\.*[0-9]*)/g).map(function (num) {
    return parseFloat(num, 10);
}),
    s = {},
    p,
    style;

function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
};

module.exports = function () {
    window.addEventListener("scroll", function (e) {
        style = "";
        p = Math.round(clamp(window.scrollY, 0, window.innerHeight) / window.innerHeight * 100) / 100;

        s["font-size"] = 1 - p / 2 + "em; ";
        s["background-color"] = "rgba(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + (a[3] + p * (0.9 - a[3])) + ");";

        Object.keys(s).forEach(function (prop) {
            style = style + " " + prop + ": " + s[prop];
        });

        h.setAttribute("style", style);
    });
};

},{}],2:[function(require,module,exports){
"use strict";

var headerScroll = require("./modules/header-scroll");

headerScroll();

},{"./modules/header-scroll":1}]},{},[2])


//# sourceMappingURL=index.js.map
