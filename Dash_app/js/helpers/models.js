function globalMenuItem(name) {
	this.display = name;
	this.link = name.substr(0,3);
}

// EXPORT
window.globalMenuItem = globalMenuItem;