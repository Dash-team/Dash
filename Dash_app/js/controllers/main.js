var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "../views/das.html",
		controller: "dashController"
	});
	$routeProvider.when("/das", {
		templateUrl: "../views/das.html",
		controller: "dashController"
	});
	$routeProvider.when("/rem", {
		templateUrl: "../views/rem.html",
		controller: "reminderController"
	});
});