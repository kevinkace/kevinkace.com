const m = require("mithril");

const layout = require("../components/layout");

module.exports = {
    view() {
        return m(layout,
            m("h2", "More coming soon."),
            m("p", "Or not soon, I'm not sure."),
            m("p", "And that email doesn't work.")
        );
    }
};
