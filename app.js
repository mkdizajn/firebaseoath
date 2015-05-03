// ==========> APP
var app = angular.module("sampleApp", ["firebase"]);
// ==========> CONTROLLER START
app.controller("SampleCtrl", function( inst, fbauth ) {
	var ref = new Firebase("https://torid-heat-8150.firebaseio.com");

	var auth = fbauth(ref);

	auth.$authWithOAuthPopup("google").then(function(authData) {
		console.log("Logged in as:", authData );
	}).catch(function(error) {
		console.log("Authentication failed:", error);
	});

	// create a synchronized array
	 inst.messages = $firebaseArray(ref);
	// add new items to the array
	// the message is automatically added to Firebase!
	 inst.addMessage = function() {
		 inst.messages.$add({
			text:  inst.newMessageText
		});
	};
});
// ==========> CONTROLLER END 
