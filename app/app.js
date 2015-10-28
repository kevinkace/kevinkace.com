// jshint node: true
"use strict";

var express = require("express"),
    app     = module.exports = express(),
    data    = {
        code   : require("./data/code"),
        footer : require("./data/footer")
    };


app.set("view engine", "jade");
app.set("views", "./app/views");
if(app.get("env") === "development") {
    app.locals.pretty = true;
}

app.get("/", function(req, res) {
        res.render("pages/home", data);
    })
    .use(express.static("./public"));

app.get("/code", function(req, res) {
        res.render("pages/code", data);
    })
    .use(express.static("./public"));
