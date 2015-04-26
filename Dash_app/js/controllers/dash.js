app.controller("dashController",["$scope","$rootScope", function($scope, $rootScope) {
	$scope.user = $rootScope.user;
	$scope.status = "Economics is coming up in 23 minutes";
	// reminder
	$scope.colorOf = function(index) {
		return $scope.user.subjects[index].color || "#288dff";
	}
}]);
