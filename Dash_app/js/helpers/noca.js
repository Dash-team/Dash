function noca() {
	this.tempValue = "";
	this.execValue = "";
	this.update = function(name, content) {
		//all values saved as string to cache
		this.execValue = "if (localStorage.getItem(\"" + name + "\") == null) {localStorage.setItem(\"" + name + "\", \"" + content + "\")} else {localStorage." + name + " = " + "\"" + content + "\"}";
		eval(this.execValue);
		console.log("variable " + name + " updated to |" + content + "|");
	}
	this.remove = function(name) {
		this.execValue = "localStorage.removeItem(\"" + name + "\")";
		eval(this.execValue);
		console.log("variable " + name + " removed from cache");
	}
	this.clear = function(name) {
		this.execValue = "localStorage." + name + " = \"\"";
		eval(execValue);
	}
	this.setStandard = function (name, content) {
		this.execValue = "standard" + name + " = \"" + content + "\"";
		eval(this.execValue);
		console.log("standard of " + name + " set to " + content);
	}
	this.reset = function (name) {
		this.tempValue = "localStorage." + name + " = " + "standard" + name;
		this.execValue = "if (!standard" + name + ") {console.log(\"no standard is set for this variable\");} else {" + this.tempValue + "}";
		eval(this.execValue);
		console.log(name + " reseted to standard value");
	}
}