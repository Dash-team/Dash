var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/Dash_app')));

app.get("/auth/:id/:pwd", function(req, res) {
	var username = req.params.id;
	var password = req.params.pwd;
	fs.readFile(path.join(__dirname,"profiles/logins.json"), function(err, data) {
		if (err) throw err;
		var logins = JSON.parse(data);
		if (logins[username] && logins[username].password === password) {
			res.json(logins[username]);
		} else {
			res.status(401);
			res.send("Wrong username or password");
		}
	});
});

app.listen(port);