var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.run(['$rootScope', function($rootScope){
	$rootScope.user = {}
}]);

app.directive('cardSmall', function() {
  return {
    restrict: 'E',
    template: '<div class="card-small"></div>'
  }
});
app.directive('cardSquare', function() {
  return {
    restrict: 'E',
    template: '<div class="card-square"></div>'
  }
});

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "../views/login.html",
		controller: "loginController"
	})
	.when("/das", {
		templateUrl: "../views/das.html",
		controller: "dashController"
	})
	.when("/res", {
		templateUrl: "../views/res.html",
		controller: "resourcesController"
	})
	.when("/rem", {
		templateUrl: "../views/rem.html",
		controller: "reminderController"
	})
	.when("/eve", {
		templateUrl: "../views/eve.html",
		controller: "evernoteController"
	})
	.when("/opt", {
		templateUrl: "../views/opt.html",
		controller: "optionController"
	})
	.when("/cal", {
		templateUrl: "../views/cal.html",
		controller: "calendarController"
	})
	.otherwise({
		redirectTo: "/"
	});
});