const m = require("mithril");

const css = [
    "/css/kevinkace.css",
    "https://fonts.googleapis.com/css?family=Alfa+Slab+One|Rokkitt|Noto+Sans"
];

const footerLinks = [{
        href  : "https://github.com/kevinkace",
        label : "GitHub"
    }, {
        href  : "https://linkedin.com/kevinkace",
        label : "LinkedIn"
    }, {
        href  : "https://twitter.com/kevinkace",
        label : "Twitter"
    }, {
        href  : "https://instagram.com/kacekevin",
        label : "Instagram"
    }];

const ga = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-68300806-1', 'auto');
ga('send', 'pageview');`;

const content = {
    view({ children }) {
        return m("div", { class : "content" }, children);
    }
};

module.exports = {
    view({ attrs, children }) {
        return m("html", { lang : "en" },
            m("head",
                m("title", attrs.title || "kevinkace.dev"),

                css.map(href =>
                    m("link", {
                        href,
                        rel  : "stylesheet",
                        type : "text/css"
                    })
                ),

                m("meta", { charset : "utf-8" }),
                m("meta", { name : "viewport", content : "width=device-width, initial-scale=1" })
            ),

            m("body",

                m("header",
                    m(content,
                        m("h1", { class : "logo" }, "Kevin", m("br"), "Cameron")
                    )
                ),

                m("main",
                    m(content, children || "")
                ),

                m("footer",
                    m(content,
                        m("nav",
                            footerLinks.map(({ href, label }) => m("a", { href }, label))
                        )
                    )
                )

            ),

            m("script", ga)
        );
    }
};
