(function  (argument) {
		'use strict';

	var wrapInSelection = function(templateRoutines){
			var routineHash = _.reduce(templateRoutines, function(memo, item){
				memo[item] = true;
				return memo;
			}, {});

			return	function(routine){
					return {
						routine:routine, 
						selected: !!routineHash[routine],
						targetReps: 10, 
						targetSets: 10
					};
				};

	};


	function selectableRoutinesList (exerciseService, workoutTemplateService) {
		var defaultTemplate = workoutTemplateService.defaultTemplate;
		var routinesFromTemplate = workoutTemplateService.extractRoutinesFromTemplate(defaultTemplate);
		return function  () {
				return _.map(exerciseService.routines, 
					wrapInSelection(routinesFromTemplate));
		}
	}

	var _module = angular.module('services.configExerciseSelection', ['services.workoutTemplate', 'services.exercise']);

	_module.factory('exerciseSelectionService',  function(exerciseService, workoutTemplateService) {
		return {
			selectableRoutinesList: selectableRoutinesList(exerciseService, workoutTemplateService),
		};
	});


})()