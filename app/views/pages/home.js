"use strict";

var m = require("mithril"),

    index = require("../index");

// this is stupid but I learned something so guess it stays
function h2(...args) {
    return m("h2", ...args);
}
function h3(...args) {
    return m("h3", ...args);
}

module.exports = {
    controller : (state) => {
        var ctrl = {};

        return ctrl;
    },
    view : (ctrl, state) => {
        return m.component(index, state, {
            title : state.title,
            intro : m(".content",
                m.trust(state.sections.intro),
                m("ul.kace-g.links",
                    state.footer.links.map((link, idx, arr) => {
                        return m(`li.kace-u-1-${arr.length}.align.align-h`,
                            m("a.target-circ.align.align-v.align-h", {
                                    href : link.url
                                },
                                m(`i.fa.fa-${link.icon}`),
                                m("span.noTxt", link.title)
                            )
                        );
                    })
                ),
                m("a.target-chev.noTxt", { href : "#more", id : "ui-moreCta" }, "more")
            ),
            sections : m(".sections", "sections sections"),
            content  : m(".content#more",
                h2("Some things I'm into"),
                m("ul.kace-g.flatlist",
                    m("li.kace-u-1-1.kace-u-tb-1-3.target-blockon",
                        h3(
                            m("a[href=https://github.com/kevinkace].kace-menu-link",
                                m("i", "code")
                            )
                        )
                    ),
                    m("li.kace-u-1-1.kace-u-tb-1-3.target-blockon",
                        h3(
                            m("a[href=http://kaceaudio.com].kace-menu-link",
                                m("i", "audio")
                            )
                        )
                    ),
                    m("li.kace-u-1-1.kace-u-tb-1-3.target-blockon",
                        h3(
                            m("a[href=http://instagram.com/kacekevin].kace-menu-link",
                                m("i", "skating")
                            )
                        )
                    )
                ),
                h2("Some things I've done"),
                m("ul.portlist",
                    state.code.projects.map((proj) => m("li", m.trust(proj.longDesc)))
                )
            )
        });
    }
};
