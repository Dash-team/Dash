
var globalMenuItem = function(name) {
	this.display = name;
	this.link = name.substr(0,3);
}
function module (name, func) {
	this.name = name;
	this.value = func;
	this.push = function() {
		globalModules.add(this);
		console.info("[MODULE] module "+name+" pushed to globalModules");
		// Every module added will be run immidiately
		// You cannot remove module once added;
	}
}
var moduleList = function() {
	this.modules = [];
	this.add = function(item) {
		if (item instanceof module) {
			this.modules.push(item);
		} else {
			console.error("[MODULE] item to add is not instance of module [models.js]");
		}
	}
	this.run = function() {
		for (i=0;i<this.modules.length;i++) {
			var currentItem = this.modules[i];
			console.info("[MODULE] Running module "+currentItem.name);
			currentItem.value();
		}
	}
}
var globalModules = new moduleList();


window.globalMenuItem = globalMenuItem;
window.module = module;
window.globalModules = globalModules;