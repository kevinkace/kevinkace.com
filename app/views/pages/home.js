"use strict";

var m = require("mithril"),

    index = require("../index");

module.exports = (ctrl) => {
    return m("h1", ctrl.header);
    // return m.component(index, { content : m("h1", ctrl.header) });
};
