// our simple app
var app = angular.module("sampleApp", ["firebase"]);
// ==========> CONTROLLER START
app.controller("SampleCtrl", function($scope, $firebaseAuth) {
	var ref = new Firebase("https://torid-heat-8150.firebaseio.com/data");

	var auth = $firebaseAuth(ref);

	auth.$authWithOAuthPopup("github").then(function(authData) {
		console.log("Logged in as:", authData.uid);
	}).catch(function(error) {
		console.log("Authentication failed:", error);
	});

	// create a synchronized array
	$scope.messages = $firebaseAuth(ref);
	// add new items to the array
	// the message is automatically added to Firebase!
	$scope.addMessage = function() {
		$scope.messages.$add({
			text: $scope.newMessageText
		});
	};
});
// ==========> CONTROLLER END 
