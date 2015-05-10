
var configuration = angular.module('configuration.controllers', [ 'services.workoutTemplate', 'services.configExerciseSelection']);


configuration.controller('ConfigExerciseCtrl', function($scope, workoutTemplateService, exerciseSelectionService) {
	$scope.routines = exerciseSelectionService.selectableRoutinesList();
	console.log($scope.routines);
  $scope.moveItem = function(){};
});


configuration.controller('ConfigWorkoutCtrl', function($scope, workoutTemplateService, exerciseSelectionService) {
  $scope.configuration = workoutTemplateService.workouts;
  $scope.moveItem = function(){};
});

// console.log("leaving configuration %s ", configuration);

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
