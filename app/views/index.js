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

    <meta charset="utf-8"></meta>
    <meta http-equiv="x-ua-compatible" content="ie=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

    <link href="https://fonts.googleapis.com/css?family=Rokkitt:700|Raleway:300|Roboto+Slab:400,700|Asap:700" rel="stylesheet"></link>
    <link href="/css/kevinkace.css", rel="stylesheet"></link>
</head>
            `),
            m("body",
                m("header#header",
                    m("h1.logo", { "data-rollText" : "Kace.com" },
                        m("a", { href : "/" }, "Kevin",
                            m("em", "Kace",
                                m("i", ".com")
                            ),
                            m("span", "Cameron")
                        )
                    )
                ),
                m("main",
                    m(".intro.slide.align.align-v",
                        opts.intro
                    ),
                    m(".sections",
                        opts.sections
                    )
                )
            )
        );
    }
};