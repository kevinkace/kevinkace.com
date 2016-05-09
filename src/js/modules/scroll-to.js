"use strict";

var rafScroll = require("raf-scroll-to"),

    scrollCta    = document.getElementById("ui-moreCta"),
    elToScroll   = document.body,
    elToScrollTo = document.getElementById("more");

module.exports = () => {
    scrollCta.addEventListener("click", (e) => {
        e.preventDefault();

        rafScroll(elToScroll, elToScrollTo.offsetTop, 200);
    });
};
