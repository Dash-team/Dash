var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/Dash_app')));

app.listen(port);