(function() {
	'use strict';
	var module = angular.module('workout.controllers', ['configuration.services', 'workout.services']);
	module.controller('WorkoutCtrl', function($scope, workoutService) {
		$scope.worksets = workoutService.listWorksets();
	});

	module.controller('WorksetCtrl', function($scope, $stateParams, workoutService) {
		$scope.workset = workoutService.retrieveWorkset($stateParams.worksetId);
	});

})();

