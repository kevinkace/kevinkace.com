const m = require("mithril");

const layout = require("../components/layout");
const cv     = require("../components/cv");

module.exports = {
    view() {
        return m(layout,
            m("p", { class : "overview" },
                "I’m a full-stack web developer, specializing in front-end. I love to build great things with brilliant people. I have an obsession with user experience, and performant, maintainable code."
            ),
            m("h2", "Projects"),
            m(cv),
        );
    }
};
