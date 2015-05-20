app.controller("dashController",["$scope","$rootScope", function($scope, $rootScope) {
	$scope.user = $rootScope.user;
	$scope.status = "Economics is coming up in 23 minutes";
	$scope.flash = {
		now: {
			title: "Biology",
			des: "Classification research",
			icon: "assets/assignment.svg"
		},
		next: {
			title: "Reminder",
			des: "Submit Task 7",
			icon: "assets/alarm.svg"
		}
	}
	$(document).ready(function() {
		// var wall = new freewall(".card-container");
		// wall.reset({
		// 	draggable: true,
		// 	cellW: function(width) {
		// 	    var cellWidth = width / 3;
		// 	    return cellWidth - 20;
		// 	}
		// });	
		// wall.fitWidth();
	});
	// reminder
	$scope.colorOf = function(index) {
		return $scope.user.subjects[index].color || "#288dff";
	}
}]);
