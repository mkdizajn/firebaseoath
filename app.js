var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebaseArray) {
	var ref = new Firebase("https://angularfiretesting.firebaseio.com/data");

	var auth = $firebaseAuth(ref);

	auth.$authWithOAuthPopup("github").then(function(authData) {
		console.log("Logged in as:", authData.uid);
	}).catch(function(error) {
		console.log("Authentication failed:", error);
	});

	// create a synchronized array
	$scope.messages = $firebaseArray(ref);
	// add new items to the array
	// the message is automatically added to Firebase!
	$scope.addMessage = function() {
		$scope.messages.$add({
			text: $scope.newMessageText
		});
	};
	// click on `index.html` above to see $remove() and $save() in action
});
