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
		workoutA: newWorkout("Workout A", inc()),
		workoutB: newWorkout("Workout B", inc()),
		workoutC: newWorkout("Workout C", inc()),
		workoutD: newWorkout("Workout D", inc()),
		workoutE: newWorkout("Workout E", inc()),
		workoutF: newWorkout("Workout F", inc()),
		workoutG: newWorkout("Workout G", inc())
	};


	var buildTemplate = function() {
		return new function() {
			var _value = {};

			this.put = function(key) {
				_value[key] = _.rest(arguments);
				return this;
			};
			this.value = function() {
				return _value;
			}
		};
	}
	var defaultTemplate = function(routines) {

		return buildTemplate()
			.put(workouts.workoutA, routines.benchPress, routines.bentOverRoll)
			.put(workouts.workoutB, routines.squats, routines.chinUps)
			.put(workouts.workoutC, routines.pullUps, routines.reverseGripEzCurl)
			.put(workouts.workoutD, routines.deadLifts, routines.overheadPress)
			.put(workouts.workoutE, routines.dips, routines.barbellCurls)
			.put(workouts.workoutF)
			.put(workouts.workoutG)
			.value();


	}


	var _module = angular.module('services.workoutTemplate', ['services.exercise']);
	_module.factory('workoutTemplateService', function(exerciseService) {
		return {
			workouts: workouts,
			defaultTemplate: defaultTemplate(exerciseService.routines)
		};

	}); //_module.factory

})(); //EOF