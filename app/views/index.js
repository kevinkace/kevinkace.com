"use strict";

var m = require("mithril");

module.exports = {
    controller : (state, opts) => {
        var ctrl = {};
    },
    view : (ctrl, state, opts) => {
        return m("html", { lang : "en" },
            m.trust(`
<head>
    <title>${opts.title}</title>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css?family=Rokkitt:700|Raleway:300|Roboto+Slab:400,700|Asap:700" rel="stylesheet">
    <link href="/css/kevinkace.css" rel="stylesheet">
</head>
            `),
            m("body",
                m("header#header",
                    m(".content",
                        m("h1.logo", { "data-rollText" : "Kace.com" },
                            m("a", { href : "/" }, "Kevin",
                                m("em", "Kace",
                                    m("i", ".com")
                                ),
                                m("span", "Cameron")
                            )
                        )
                    )
                ),
                m("main",
                    m(".intro.slide.align.align-v",
                        opts.intro
                    ),
                    m(".sections",
                        opts.content
                    )
                ),
                m("footer",
                    m(".content",
                        m("ul.kace-g.icon-list.guttered",
                            state.footer.links.map((link, idx, arr) => {
                                return m(`li.kace-u-1-${arr.length}`,
                                    m(`a.btn btn-default[href=${link.url}]`,
                                        m(`i.fa.fa-${link.icon}`),
                                        m("span.noTxt", link.title)
                                    )
                                );
                            })
                        )
                    )
                ),
                m("script[src=/js/index/js]")
            )
        );
    }
};
