(function() {
  'use strict';
// QUESTION - on line 4. 
  angular.module('starter.login', [])
    .controller('LoginCtrl', function($scope, $state) {
     $scope.data = {};
     $scope.login = function() {
      console.log("login user: " + $scope.data.username);
     };
    });
})();