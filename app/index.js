"use strict";

var app  = require("./app.js"),
    port = 8080;

app.listen(port, () => {
    console.log(`Starting app on ${port}`);
});
