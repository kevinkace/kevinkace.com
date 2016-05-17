"use strict";

var m = require("mithril"),

    index = require("../index");

module.exports = {
    controller : (state) => {
        var ctrl = {};

        ctrl.length = state.title.length;

        return ctrl;
    },
    view : (ctrl, state) => {
        return m.component(index, state, {
            title   : state.title,
            content : m(".content", "here's content")
        });
    }
};
