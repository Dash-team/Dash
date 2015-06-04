app.controller("dashController",["$scope","$rootScope","$compile", function($scope, $rootScope, $compile) {
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
	$scope.init = function() {
		for (x=0;x<$scope.user.cards.length;x++) {
			var container = angular.element(document.querySelector("div.gridster ul#elems"));
			container.append($compile('<li data-row="2" data-col="1" data-sizex="'+$scope.user.cards[x].width+'" data-sizey="'+$scope.user.cards[x].height+'" ng-click="expandCard($event)" data-hash="'+$scope.user.cards[x].name+'" ng-include="'+$scope.user.cards[x].source+'"></li>')($scope));
		}
	}
	$(function() {
		$scope.init();
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
