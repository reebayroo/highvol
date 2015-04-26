
var configuration = angular.module('configuration.controllers', ['configuration.services']);


configuration.controller('ConfigExerciseCtrl', function($scope, exerciseService) {
	var exercises = _.groupBy(exerciseService.listExercises(),'kind');
	console.log(exercises);
  $scope.compoundExercises = exercises["Compound"];
  $scope.isolationExercises = exercises["Isolation"];
  $scope.moveItem = function(){};
});


configuration.controller('ConfigWorkoutCtrl', function($scope, exerciseService) {
  $scope.configuration = exerciseService.listWorkouts();
  $scope.moveItem = function(){};
});

console.log("leaving configuration %s ", configuration);

var retrieveConfiguration = function() {
  return {
    availableSets: ["Bench Press", "Pull Ups", "Chin ups", "Squats", "Dead Lifts"],
    workouts: [{
      title: "Workout A",
      worksets: ["Squats", "Dead Lifts"]
    }, {
      title: "Workout B",
      worksets: ["Bench Press", "Pull Ups", "Chin ups"]
    }, {
      title: "Workout C",
      worksets: ["Bench Press", "Pull Ups", "Chin ups"]
    }]
  };
};
