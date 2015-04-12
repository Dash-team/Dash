var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "../views/das.html",
		controller: "dashController"
	});
	$routeProvider.when("/reminder", {
		templateUrl: "../views/rem.html",
		controller: "reminderController"
	});
});