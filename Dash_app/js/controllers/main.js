var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.run(['$rootScope', function($rootScope){
	$rootScope.user = {};
	$rootScope.user.assessments = [
			{
				"name": "Math investigation",
				"progress": 40,
				"dueDate": "24/3/2015"
			},
			{
				"name": "Accounting test",
				"progress": 72,
				"dueDate": "19/3/2015"
			}
		];
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
		redirectTo: "/"
	});
	$routeProvider.when("/opt", {
		templateUrl: "../views/opt.html",
		controller: "optionController"
	});
});