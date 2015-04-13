var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.run(['$rootScope', function($rootScope){
    $rootScope.reminders = ["do math homework", "write journal", "computer science investigation"];
}]);

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