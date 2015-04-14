var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/Dash_app')));

app.get("/auth/:id", function(req, res) {
	var username = req.params.id;
	fs.readFile(path.join(__dirname,"profiles/logins.json"), function(err, data) {
		if (err) throw err;
		var logins = JSON.parse(data);
		res.json(logins[username]);
	});
});

app.listen(port);