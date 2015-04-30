(function(){

	var app = angular.module( 'main', [ ] ) ;
	app.controller( 'usersctrl', function(){
		this.user = gem;
	});

	var gem = [
		{ name: 'mirko', DOB: '1/2/1980', canP: true },
		{ name: 'slavko', DOB: '2/6/1988', canP: false },
	];

})();