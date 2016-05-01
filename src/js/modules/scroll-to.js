"use strict";

var rafScroll = require("raf-scroll-to"),

    cta  = document.getElementById("ui-moreCta"),
    dest = document.getElementById("more");

cta.addEventListener("click", function(e) {
    e.preventDefault();

    rafScroll(dest, 0, 1);
});
