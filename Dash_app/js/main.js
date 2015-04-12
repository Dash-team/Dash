var app = angular.module("app",[]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

var screenIDs = ["dashView", "reminderView"];

window.app = app;

// auto fadeout screen

function fadeOut(screenId) {
	document.getElementById("das").style.display = "none";
	document.getElementById(screenId).style.display = "block";
}
