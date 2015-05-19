

(function() {
	'use strict';
	var module = angular.module(EXERCISE.MODULE);
	console.log("******************************************************************");
	console.log("defining controller " +  EXERCISE.CONTROLLER);
	console.log("******************************************************************");
	module.controller(EXERCISE.CONTROLLER, function($scope, exerciseService) {
		console.log("ExerciseService");
		console.log(exerciseService);
		$scope.routines = exerciseService.routines;
	});


})();

