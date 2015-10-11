// jshint node: true
"use strict";

var app  = require("./app.js"),
    port = 8080;

app.listen(port, function() {
    console.log("App started, listening on " + port);
});
