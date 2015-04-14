app.controller("loginController", ["$scope","$http","$rootScope", function($scope,$http,$rootScope) {
	$scope.username = "";
	$scope.password = "";
	$scope.auth = function() {
		$http.get("/auth/"+$scope.username)
			.success(function(data,status,header,config) {
				alertify.success("Logged in successful as "+$scope.username);
				$rootScope.user = data;
				window.location.hash = "das";
			})
			.error(function(data,status,header,config) {
				alertify.error(status+": "+data);
			});
	}
}]);