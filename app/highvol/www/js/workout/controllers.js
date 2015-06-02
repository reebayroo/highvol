(function() {
	'use strict';
	var module = angular.module('workout.controllers', [PROGRAMS.MODULE]);
	module.controller('WorkoutCtrl', function($scope, programsService) {
		$scope.worksets = programsService.workout;
	});

	module.controller('WorksetCtrl', function($scope, $stateParams, programsService) {
		$scope.workset = programsService.retrieveWorkset($stateParams.worksetId);
	});

})();

