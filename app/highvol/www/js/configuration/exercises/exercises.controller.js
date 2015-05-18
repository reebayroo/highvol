

(function() {
	'use strict';
	var module = angular.module('exercise.controller', ['exercise.service']);
	module.controller('ExerciseController', function($scope, exerciseService) {
		$scope.routines = exerciseService.routines;
	});


})();

