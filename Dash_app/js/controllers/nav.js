var app = angular.module("app",[]);

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });

app.controller("navController",["$scope", function($scope) {
	$scope.appName = "Notebook";
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
	$scope.items = [new globalMenuItem("file"),
					new globalMenuItem("sync"),
					new globalMenuItem("share"),
					new globalMenuItem("collaborate"),
					new globalMenuItem("options")
					];
}]);

window.app = app;


