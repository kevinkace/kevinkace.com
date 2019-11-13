const fs   = require("fs");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

exports.onPreBuild = () => copyFile("./src/markdown/resume.md", "./static/resume.md")
