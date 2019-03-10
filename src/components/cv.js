const m = require("mithril");

const list = [{
    label : "Lyrite*",
    href  : "https://github.com/kevinkace/lyrite",
    desc  : "SPA for formatting lyrics. Mithril, modular-css, Webpack. Hosted on GitHub Pages at <a href='http://lyrite.com'>lyrite.com</a>."
}, {
    label : "Animation-Resolve*",
    href  : "https://github.com/kevinkace/animation-resolve",
    desc  : "Tool providing a function that returns a Promise, which resolved when a CSS animation completes."
}, {
    label : "cssJoin*",
    href  : "https://github.com/kevinkace/cssJoin",
    desc  : "Tool to conditionally join CSS classes."
}, {
    label : "PostHTML-Pseudo*",
    href  : "https://npmjs.com/package/posthtml-pseudo",
    desc  : "PostHTML plugin to add pseudo classes (<span class='mono'>:first-child</span>, <span class='mono'>:last-child</span>, etc) to HTML (for use with HTML emails)."
}, {
    label : "SVG-Spritzer*",
    href  : "https://npmjs.com/package/svg-spritzer",
    desc  : "Tool to join separate SVGs into a single sprite."
}, {
    label : "Crucible CMS",
    href  : "https://npmjs.com/package/crucible",
    desc  : "SPA, headless CMS backed by <a href='https://firebase.google.com'>Firebase</a>."
}, {
    label : "Mithril-SSG*",
    href  : "https://github.com/kevinkace/mithril-ssg",
    desc  : "CLI static site generator for Mithril (used to generate <a href='https://kevinkace.dev'>kevinkace.dev</a>)."
}];

module.exports = {
    view() {
        return m("div", { class : "cv" },
            m("ul",
                list.map(({ href, label, desc }) =>
                    m("li",
                        m("a", {
                                href,
                                class  : "bold",
                                target : "_blank",
                                rel    : "noopener noreferrer"
                            },
                            label
                        ),
                        m("p", m.trust(desc))
                    )
                )
            ),
            m("p", { class : "small" }, "* Sole contributor")
        );
    }
};
