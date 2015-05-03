var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function( ins , fb) {
  var ref = new Firebase("https://angularfiretesting.firebaseio.com/data");
   ins.messages = fb(ref);
   ins.addMessage = function() {
     ins.messages.$add({
      text:  ins.newMessageText
    });
  };
});
