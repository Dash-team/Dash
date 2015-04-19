var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.run(['$rootScope', function($rootScope){
	$rootScope.user = {}
}]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "../views/login.html",
		controller: "loginController"
	});
	$routeProvider.when("/das", {
		templateUrl: "../views/das.html",
		controller: "dashController"
	});
	$routeProvider.when("/res", {
		templateUrl: "../views/res.html",
		controller: "resourcesController"
	});
	$routeProvider.when("/rem", {
		templateUrl: "../views/rem.html",
		controller: "reminderController"
	});
	$routeProvider.when("/opt", {
		templateUrl: "../views/opt.html",
		controller: "optionController"
	});
	$routeProvider.otherwise({
		redirectTo: "/"
	});
});