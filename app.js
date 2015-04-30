(function(){


	var ref = new Firebase("https://torid-heat-8150.firebaseio.com");
		ref.authWithOAuthPopup("github", function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
		}
	});


	var app = angular.module( 'main', [ ] ) ;
	app.controller( 'usersctrl', function(){
		this.user = gem;
	});

	var gem = [
		{ name: 'mirko', DOB: '1/2/1980', canP: true },
		{ name: 'slavko', DOB: '2/6/1988', canP: false },
	];

})();