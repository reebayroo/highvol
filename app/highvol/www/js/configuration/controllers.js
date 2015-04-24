
var configuration = angular.module('configuration.controller', ['configuration.services']);


configuration.controller('ConfigExerciseCtrl', function($scope, exerciseService) {
  $scope.compoundExercises = exerciseService.retrieveListOfCompoundExercises();
  $scope.moveItem = function(){};
});

console.log("leaving configuration %s ", configuration);
