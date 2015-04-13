app.controller("dashController",["$scope", "$window", function($scope, $window) {
	$scope.subject = "Economics";
	$scope.timeleft = "32 minutes";
	$scope.noteCount = 17;
	$scope.resourceCount = 63;
	// reminder
	$scope.reValue = "";
	$scope.handle = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			$window.reminders.push($scope.reValue);
			alertify.success("added reminder: \"" + $scope.reValue + "\"");
			$scope.reValue = "";
		}
	}
}]);
