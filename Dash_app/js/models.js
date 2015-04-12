
function globalMenuItem(name) {
	this.display = name;
	this.link = name.substr(0,3);
}
function module(name, func, data) {
	this.name = name;
	this.value = func;
	this.source = data ? data : null;
	this.push = function() {
		globalModules.add(this);
		console.info("[MODULE] module "+name+" pushed to globalModules");
	}
}
function moduleList() {
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


// EXPORT
window.globalMenuItem = globalMenuItem;
window.module = module;
window.globalModules = globalModules;