var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
var compress = require("compression");
var port = process.env.PORT || 3000;

app.use(compress());
app.use(express.static(path.join(__dirname, '/Dash_app')));

app.get("/auth/in/:id/:pwd", function(req, res) {
	var username = req.params.id;
	var password = req.params.pwd;
	console.log("AUTH ["+username+"] attempt login");
	fs.readFile(path.join(__dirname,"profiles/logins.json"), function(err, data) {
		if (err) throw err;
		var logins = JSON.parse(data);
		if (logins[username] && logins[username].password === password) {
			fs.readFile("profiles/" + logins[username].profile, function(error, info) {
				var profile = JSON.parse(info);
				res.json(profile);
			});
			console.log("AUTH ["+username+"] login successful");
		} else {
			res.status(401);
			res.send("Wrong username or password");
			console.log("AUTH ["+username+"] login fail");
		}
	});
});

app.listen(port);