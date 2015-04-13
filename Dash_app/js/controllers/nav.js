app.controller("navController",["$scope", function($scope) {
	$scope.appName = "Dash";
	$scope.expandedMenu = document.querySelectorAll("div.template.nav div.expanded")[0];
	$scope.menuIconState = "| | |";
	$scope.open = false;
	$scope.toggle = function() {
		if ($scope.open) {
			$scope.open = false;
			$scope.menuIconState = "| | |";
			$scope.expandedMenu.style.left = "-214px";
		} else {
			$scope.open = true;
			$scope.menuIconState = "&#9587;";
			$scope.expandedMenu.style.left = "86px";
		}	
	}
	$scope.credit = function() {
		$scope.toggle();
		alertify.log("Made with ❤ and cookies - Dash team");
	}
	$scope.items = [new globalMenuItem("dashboard"),
					new globalMenuItem("resources"),
					new globalMenuItem("calendar"),
					new globalMenuItem("options"),
					new globalMenuItem("reminder")
					];
}]);