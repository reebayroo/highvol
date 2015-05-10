(function() {
	'use strict';
	var module = angular.module('workout.controllers', ['services.workoutTemplate']);
	module.controller('WorkoutCtrl', function($scope, workoutTemplateService) {
		$scope.worksets = workoutTemplateService.workout;
	});

	module.controller('WorksetCtrl', function($scope, $stateParams, workoutTemplateService) {
		$scope.workset = workoutTemplateService.retrieveWorkset($stateParams.worksetId);
	});

})();

