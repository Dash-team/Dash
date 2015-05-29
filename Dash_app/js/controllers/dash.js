app.controller("dashController",["$scope","$rootScope", function($scope, $rootScope) {
	$scope.drag = false;
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
	$(function() {
    	$(".gridster ul").gridster({
        	widget_margins: [10, 10],
        	widget_base_dimensions: [170, 170],
        	draggable: {
        		start: function() {
        			$scope.drag = true;
        		}
        	}
    	});
	});
	$scope.expandCard = function($event) {
		if (!$scope.drag) {
			var DOMcard = $event.target;
			window.location.hash = DOMcard.getAttribute("data-hash");
		}
		$scope.drag = false;
	}
	// reminder
	$scope.colorOf = function(index) {
		return $scope.user.subjects[index].color || "#288dff";
	}
}]);
