var app = angular.module("app",["ngRoute"]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.run(['$rootScope', function($rootScope){
	$rootScope.user = {}
}]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "../views/login.html",
		controller: "loginController"
	})
	.when("/das", {
		templateUrl: "../views/das.html",
		controller: "dashController"
	})
	.when("/opt", {
		templateUrl: "../views/opt.html",
		controller: "optionController"
	})
	.when("/evernote", {
		templateUrl: "cards/evernote/index.html",
		controller: "evernoteController"
	})
	.when("/calendar", {
		templateUrl: "cards/calendar/index.html",
		controller: "calendarController"
	})
	.when("/reminders", {
		templateUrl: "cards/reminders/index.html",
		controller: "remindersController"
	})
	.otherwise({
		redirectTo: "/"
	});
});