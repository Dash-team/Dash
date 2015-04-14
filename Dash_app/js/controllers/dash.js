app.controller("dashController",["$scope","$rootScope", function($scope, $rootScope) {
	$scope.subject = "Economics";
	$scope.timeleft = "32 minutes";
	$scope.noteCount = 17;
	$scope.resourceCount = 63;
	// reminder
	$scope.reValue = "";
	$scope.handle = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			alertify.success("added reminder: \"" + $scope.reValue + "\"");
			$rootScope.user.reminders.push($scope.reValue);
			console.log($rootScope.reminders);
			$scope.reValue = "";
		}
	}
	$scope.assessments = $rootScope.user.assessments;
}]);
