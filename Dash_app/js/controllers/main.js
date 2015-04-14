var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.run(['$rootScope', function($rootScope){
	$rootScope.user = {};
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
	$routeProvider.when("/rem", {
		templateUrl: "../views/rem.html",
		controller: "reminderController"
	});
	$routeProvider.otherwise({
		redirectTo: "../views/login.html"
	});
});