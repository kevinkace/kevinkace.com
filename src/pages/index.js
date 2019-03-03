const m = require("mithril");

const layout = require("../components/layout");

module.exports = {
    view() {
        return m(layout,
            m("h2", "More coming soon."),
            m("p", "In the meantime check the links below")
        );
    }
};
