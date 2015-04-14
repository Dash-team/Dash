app.controller("reminderController",["$scope","$rootScope",function($scope,$rootScope) {
	$scope.reValue = "";
	$scope.reminders = $rootScope.user.reminders;
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
		$scope.reminders.splice($index,1);
	}
	$scope.edit = function ($index) {
		alertify.prompt("Edit reminder", function (e, str) {
   			if (e) {
   				$scope.reminders[$index] = str;
   				//refreshes view
   				$scope.$apply();
    		} 
		}, $scope.reminders[$index]);
	}
}]);