(function  (argument) {
		'use strict';

	var wrapInSelection = function(routine){
		return {
			routine:routine, 
			selected: true,
			targetReps: 10, 
			targetSets: 10
		};
	};

	function listSelection (exerciseService) {
		return function  () {
				return _.map(exerciseService.routines, wrapInSelection);
		}
	}

	var _module = angular.module('services.configExerciseSelection', ['services.exercise', 'services.workoutTemplate']);

	_module.factory('exerciseSelectionService', function(exerciseService) {
		return {
			listSelection: listSelection(exerciseService),
		};
	});


})()