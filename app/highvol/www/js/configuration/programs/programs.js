(function(argument) {
	"use strict";

	var newWorkout = function(name, id) {
		return {
			name: name,
			id: id,
			toString: function() {
				return name;
			}
		}
	};
	var inc = (function() {
		var i = 1;
		return function() {
			return ++i
		};
	})();

	var workouts = {
		day1: newWorkout("Day 1", inc()),
		day2: newWorkout("Day 2", inc()),
		day3: newWorkout("Day 3", inc()),
		day4: newWorkout("Day 4", inc()),
		day5: newWorkout("Day 5", inc()),
		day6: newWorkout("Day 6", inc()),
		day7: newWorkout("Day 7", inc())
	};


	var programBuilder = function() {
		return new function() {
			var _value = {};

			this.put = function(key) {
				_value[key] = _.rest(arguments);
				return this;
			};
			this.name = function(value){
				_value.name = value;
				return this;
			}
			this.value = function() {
				return _value;
			}
		};
	}
	var defaultProgram = function(routines) {
		function program(routine){
			return { routine: routine, targetSets: 3, targetReps: 12 };
		}

		return programBuilder()
			.put(workouts.day1, program(routines.benchPress), program(routines.bentOverRoll))
			.put(workouts.day2, program(routines.squats), program(routines.chinUps))
			.put(workouts.day3, program(routines.pullUps), program(routines.reverseGripEzCurl))
			.put(workouts.day4, program(routines.deadLifts), program(routines.overheadPress))
			.put(workouts.day5, program(routines.dips), program(routines.barbellCurls))
			.put(workouts.day6)
			.put(workouts.day7)
			.name("default")
			.value();


	}

	var buildFiveByFive = function(routines){
		function program(routine){
			return { routine: routine, targetSets: 5, targetReps: 5 };
		}		
		return programBuilder()
			.put(workouts.day1, program(routines.squats), program(routines.benchPress), program(routines.bentOverRoll))
			.put(workouts.day2, program(routines.squats), program(routines.overheadPress), program(routines.deadLifts))
			.put(workouts.day3)
			.put(workouts.day4) 
			.put(workouts.day5)
			.put(workouts.day6)
			.put(workouts.day7)
			.name("5 x 5")
			.value();


	};

	var buildAdditionalPrograms = function(routines){
		return [
			buildFiveByFive(routines)
		];
	};
	var _module = angular.module('services.programs', [EXERCISE.MODULE]);
	_module.factory('programsService', function(exerciseService) {
		return {
			workouts: workouts,
			defaultProgram: defaultProgram(exerciseService.routines),
			programs: buildAdditionalPrograms(exerciseService.routines)
		};

	}); //_module.factory

})(); //EOF