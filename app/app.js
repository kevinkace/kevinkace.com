// jshint node: true
"use strict";

var express = require("express"),
    app     = module.exports = express();

app
    .get("/", function(req, res) {
        res.send("<html><head><link href=\"/css/kevinkace.css\" rel=\"stylesheet\" type=\"text/css\"></head><body><h1>Here's the h1</h1></body></html>");
    })
    .use(express.static("./public"));
    
