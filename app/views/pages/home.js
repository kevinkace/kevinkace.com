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
            title : state.title,
            intro : m(".content",
                m(".intro",
                    m("ul.kace-g.links",
                        state.footer.links.map((link, idx, arr) => {
                            return m(`li.kace-u-1-${arr.length}.align.align-h`,
                                m("a.target-circ.align.align-v.align-h", {
                                        href : link.url
                                    },
                                    m(".noTxt", link.title)
                                )
                            );
                        })
                    ),
                    m("a.target-chev", { href : "#more", id : "ui-moreCta" }, "more")
                )
            ),
            sections : m(".sections", "sections sections"),
            content  : m(".content", "here's content")
        });
    }
};
