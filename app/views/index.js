"use strict";

var m = require("mithril");

module.exports = (ctrl) => {
    console.log(ctrl.content);
    return m.trust(`<!doctype html>
<html lang="en">
    <head>
        <title>Kevin Cameron</title>

        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Alfa+Slab+One|Rokkitt:700" rel="stylesheet" />
        <link href="/css/kevinkace.css" rel="stylesheet" />
    </head>
    <body>
        <header>
            <div class="content">
                <h1 id="logo" data-rolltext="Kace.com">
                    <a href="/">
                        Kevin <em>Kace<i>.com</i></em>
                        <span>Cameron</span>
                    </a>
            </div>
        </header>
        <main>
            <div class="intro slide align align-v">
                It's the intro!
            </div>
            <div class="sections">
                ${ctrl.content}
            </div>
        </main>
        <footer>
            <div class="content">
                <ul class="kace-g icon-list guttered">
                    <li>stuff</li>
                </ul>
            </div>
        </footer>
        <script src="/js/index.js"></script>
    </body>
</html>
`);
};
