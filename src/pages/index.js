const m = require("mithril");

const layout = require("../components/layout");
const cv     = require("../components/cv");

const overview =
`I’m a full-stack web developer, specializing in front-end.
I love building great things with brilliant people.
I have an obsession with user experience, performance, and maintainable code.`;

module.exports = {
    view() {
        return m(layout,
            m("p", { class : "overview" }, overview),
            m("h2", "Projects"),
            m(cv),
        );
    }
};
