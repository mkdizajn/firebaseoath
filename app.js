(function(){

	var app = angular.module( 'main', [] ) ;
	app.controller( 'usersctrl', function( scope, fbobj ){

		var ref = new Firebase("https://torid-heat-8150.firebaseio.com");
			ref.authWithOAuthRedirect("github", function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				console.log("Authenticated successfully with payload:", authData);
			}
		});

		var syncobj = fbobj( ref );
		syncobj.$bindTo( scope, "data" );

	});

})();