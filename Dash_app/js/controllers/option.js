app.controller("optionController",["$scope","$rootScope",function($scope,$rootScope) {
	$scope.name = $rootScope.user.fullName || "not logged in";
	$scope.logout = function() {
		$rootScope.user = {};
		alertify.success("Logged out");
		document.querySelector("div.template.nav.active").setAttribute("class","template nav");
		window.location.hash = "/";
	}
}]);