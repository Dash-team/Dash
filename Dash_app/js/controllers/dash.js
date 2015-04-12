app.controller("dashController",["$scope", function($scope) {
	$scope.subject = "Economics";
	$scope.timeleft = "32 minutes";
	$scope.noteCount = 17;
	$scope.resourceCount = 63;
	// reminder
	$scope.reValue = "";
	var reminder = new noca();
	$scope.handle = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			alertify.success("added reminder: \"" + $scope.reValue + "\"");
			reminder.update($scope.reValue, $scope.reValue);
			$scope.reValue = "";
		}
	}
}]);
