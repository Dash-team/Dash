app.controller("loginController", ["$scope","$http","$rootScope", function($scope,$http,$rootScope) {
	console.log($rootScope.user);
	if ($rootScope.user.fullName) {
		//user logged in but likely got redirected
		//redirect them to dashboard instead
		window.location.hash = "das";
	} else {
		//user have not logged in, proceed normally
		//dismiss prerender
		document.querySelector("div.prerender").style.opacity = "0";
		setTimeout(function() {
			document.querySelector("div.prerender").style.display = "none";
		}, 250);

		$scope.username = "kevin";
		$scope.password = "kevin";

		$scope.loadComponents = function(components) {
			for (x=0;x<components.length;x++) {
				loadScript("cards/"+components[x].name+"/index.js", function() {});
			}
		}
		$scope.auth = function() {
			var loadingScreen = document.getElementById('loadingScreen');
			loadingScreen.style.opacity = 1;
			loadingScreen.style.zIndex = 999;
			loadingScreen.style.marginTop = 0;

			$http.get("/auth/in/"+$scope.username+"/"+$scope.password)
			.success(function(data,status,header,config) {
					alertify.success("Logged in successful as "+$scope.username);
					$rootScope.user = data;
					//mixpanel
					mixpanel.identify(data.fullName);
					mixpanel.people.set({
						"$name": data.fullName,
						"lastLogin": new Date()
					});
					//Load all components for cards
					$scope.loadComponents($rootScope.user.cards)
					document.querySelector("div.template.nav").setAttribute("class","template nav active");
					window.location.hash = "das";
				})
				.error(function(data,status,header,config) {
					alertify.error(status+": "+data);
					loadingScreen.style.opacity = 0;
					loadingScreen.style.zIndex = 500;
					loadingScreen.style.marginTop = "20%";
				});
		}
	}
	function loadScript(src, callback) {
	  var s,
	      r,
	      t;
	  r = false;
	  s = document.createElement('script');
	  s.type = 'text/javascript';
	  s.src = src;
	  s.onload = s.onreadystatechange = function() {
	    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
	    if ( !r && (!this.readyState || this.readyState == 'complete') )
	    {
	      r = true;
	      callback();
	    }
	  };
	  t = document.getElementsByTagName('script')[0];
	  t.parentNode.insertBefore(s, t);
	}
}]);