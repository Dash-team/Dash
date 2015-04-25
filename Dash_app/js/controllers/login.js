app.controller("loginController", ["$scope","$http","$rootScope", function($scope,$http,$rootScope) {
	//dismiss prerender
	document.querySelector("div.prerender").style.opacity = "0";
	setTimeout(function() {
		document.querySelector("div.prerender").style.display = "none";
	}, 250);

	document.querySelector("div.template.nav").setAttribute("class","template nav");
	$scope.username = "";
	$scope.password = "";
	$scope.auth = function() {
		var loadingScreen = document.getElementById('loadingScreen');
		loadingScreen.style.opacity = 1;
		loadingScreen.style.zIndex = 999;
		loadingScreen.style.marginTop = 0;

		$http.get("/auth/in/"+$scope.username+"/"+$scope.password)
		.success(function(data,status,header,config) {
				alertify.success("Logged in successful as "+$scope.username);
				$rootScope.user = data;
				document.querySelector("div.template.nav").setAttribute("class","template nav active");
				//mixpanel
				mixpanel.identify(data.fullName);
				mixpanel.people.set({
					"$name": data.fullName,
					"lastLogin": new Date()
				});

				window.location.hash = "das";
			})
			.error(function(data,status,header,config) {
				alertify.error(status+": "+data);
				loadingScreen.style.opacity = 0;
				loadingScreen.style.zIndex = 500;
				loadingScreen.style.marginTop = "20%";
			});
	}
}]);