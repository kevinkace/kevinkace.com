"use strict";

var m = require("mithril");

module.exports = {
    controller : (state, opts) => {
        var ctrl = {};
    },
    view : (ctrl, state, opts) => {
        var title = opts.title;

        return m("html",
            m.trust(`
<head>
    <title>${title}</title>
</head>
            `),
            m("body",
                opts.content
            )
        );
    }
};
