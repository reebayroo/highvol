(function  (argument) {
		'use strict';

	var buildSelection = function(templateRoutines){
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

	var extractRoutinesFromTemplate = function(template){
		return _.reduce(Object.keys(template), function(memo, weekday){
			return memo.concat(_.toArray(template[weekday]));
		}, []);
	}

	function selectableRoutinesList (exerciseService, programsService) {
		var defaultProgram = programsService.defaultProgram;
		var program = extractRoutinesFromTemplate(defaultProgram);
		return function  () {
				return _.map(exerciseService.routines, 
					buildSelection(program));
		}
	}
	function routineListLazyLoader(caller){
		return function(){ 
				if (!this.routinesList){
					this.routinesList= caller();
				}
				return this.routinesList;
		};
	}
	var _module = angular.module('services.configExerciseSelection', [PROGRAMS.MODULE, EXERCISE.MODULE]);

	_module.factory('exerciseSelectionService',  function(exerciseService, programsService) {
		return {
			selectableRoutinesList: routineListLazyLoader(selectableRoutinesList(exerciseService, programsService)),
		};
	});


})()