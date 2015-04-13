app.controller("reminderController",function($scope) {
	$scope.reValue = "";
	$scope.reminders = ["do math homework", "write journal", "computer science investigation"];
	var reminder = new noca();
	$scope.handle = function(event) {
		if (event.keyCode == 13) {
			event.preventDefault();
			alertify.success("added reminder: \"" + $scope.reValue + "\"");
			$scope.reminders.push($scope.reValue);
			$scope.reValue = "";		
		}
	}
	$scope.click = function ($index) {
		$scope.reminders.splice($index, 1);
	}
});