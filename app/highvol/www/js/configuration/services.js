/*jshint strict:false */
(function() {
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
	var newExercise = function(id, label, kind) {
		return {
			id: id,
			label: label,
			kind: kind,
			toString: function() {
				return this.label;
			}
		};
	};
	var compound = function(id, label) {
		return newExercise(id, label, KINDS.COMPOUND);
	};
	var isolation = function(id, label) {
		return newExercise(id, label, KINDS.ISOLATION);
	};



	var KINDS = {
		COMPOUND: 'Compound',
		ISOLATION: 'Isolation'
	};
	var WORKOUTS = {
		WORKOUT_A: newWorkout("Workout A", 0x00001),
		WORKOUT_B: newWorkout("Workout B", 0x00002),
		WORKOUT_C: newWorkout("Workout C", 0x00004),
		WORKOUT_D: newWorkout("Workout D", 0x00008),
		WORKOUT_E: newWorkout("Workout E", 0x00016),
		WORKOUT_F: newWorkout("Workout F", 0x00032),
		WORKOUT_G: newWorkout("Workout G", 0x00064)
	};


	var EXERCISES = {
		benchPress: compound("851bfc7f-4064-4e76-8113-5ee61fc19e51", "Bench Press"),
		bentOverRoll: compound("4973e2ed-5082-4b65-b79f-4d5260180188", "Bent Over Barbell Row"),
		chinUps: compound("9e64213b-9882-40e4-a001-eae480ab07f2", "ChinUps"),
		deadLifts: compound("66ce41f5-e914-40cf-9690-b98d54ce5bee", "Deadlifts"),
		dips: compound("d5d13009-2e9f-45c9-bf29-d57d1aabe26a", "Dips"),
		inclineBenchPress: compound("11f67231-7d99-4eb0-9f25-4ef9436e89ba", "Incline Bench Press"),
		overheadPress: compound("24573dfb-ac3c-4390-bae9-d56137aa01c4", "Overhead Press"),
		pullUps: compound("82ad8ea6-ab3c-4839-af22-a066eb0d46bd", "Pull-Ups"),
		squats: compound("640f5b16-17de-4139-8a81-d62ba163ccf4", "Squats"),
		skullCrusher: isolation("87d8e5e1-16ce-4b87-b326-6587c25b7c77", "Ez Bar Skullcrusher"),
		barbellCurls: isolation("c20588b6-e7e1-4be6-9009-5acc9e46b95b", "Barbell Curls"),
		sideLaterals: isolation("2249509c-a289-4cfd-85cb-82bc00cf780d", "Dumbbell Side Laterals"),
		reverseGripEzCurl: isolation("a14fa4c2-a6ed-49b1-bd0b-47f86c19c31b", "Reverse Grip Ez Bar Curl"),
		stadingCalfRaise: isolation("37179b0c-f544-4105-b222-0994ba3859fe", "Standing Calf Raise")

	};
	//console.log(EXERCISES);
	var listExercises = function() {
		// if (!this.loadedList)
		this.loadedList = createNewList();
		//console.log(this.loadedList);
		return this.loadedList;
	};



	var createNewList = function() {

		var newWorkout = function(exercise) {
			return {
				id: exercise.id,
				targetSets: 10,
				text: exercise.label,
				kind: exercise.kind,
				active: true,
				toString: function() {
					return this.text
				}
			};
		};

		// 
		var result = [
			EXERCISES.benchPress,
			EXERCISES.bentOverRoll,
			EXERCISES.chinUps,
			EXERCISES.deadLifts,
			EXERCISES.dips,
			EXERCISES.inclineBenchPress,
			EXERCISES.overheadPress,
			EXERCISES.pullUps,
			EXERCISES.squats,
			EXERCISES.skullCrusher,
			EXERCISES.barbellCurls,
			EXERCISES.sideLaterals,
			EXERCISES.reverseGripEzCurl,
			EXERCISES.stadingCalfRaise
		];
		var workouts = [WORKOUTS.WORKOUT_A, WORKOUTS.WORKOUT_B, WORKOUTS.WORKOUT_C, WORKOUTS.WORKOUT_D, WORKOUTS.WORKOUT_E, WORKOUTS.WORKOUT_F, WORKOUTS.WORKOUT_G];

		return _.chain(result).map(newWorkout).value();

	};

	var listWorkouts = function() {


		var isPreselectedExercise = function(workout, exercise) {
			var result = !!predefined[workout] && !!predefined[workout][exercise];
			return result;
		};


		var preSelect = function() {
			var result = _.reduce(_.toArray(arguments), function(map, item) {
				map[item] = true;
				return map;
			}, {});
			return result;
		}
		var predefined = {};
		predefined[WORKOUTS.WORKOUT_A] = preSelect(EXERCISES.benchPress, EXERCISES.bentOverRoll);

		var selectableExercise = function(workout) {
			return function(exercise) {
				return {
					exercise: exercise,
					selected: isPreselectedExercise(workout, exercise)
				};
			};

		};



		var activeExercises = _.filter(this.listExercises(), {
			active: true
		});

		var result = _.map(WORKOUTS, function(workout) {
			return {
				workout: workout,
				worksets: _.map(activeExercises, selectableExercise(workout))
			};
		});


		return result;

	};

	var configuration = angular.module('configuration.services', []);

	//console.log("inside configuration service %s", configuration);

	var preparedWorkouts = function() {
		return ["default"];
	};
	var preparedWorkout = function(workout) {
		function put(key){
			mapResult[key] = _.rest(arguments);
		}
		var mapResult = {};
		put( WORKOUTS.WORKOUT_A, EXERCISES.benchPress, EXERCISES.bentOverRoll )
		put( WORKOUTS.WORKOUT_B, EXERCISES.squats, EXERCISES.barbellCurls );
		return mapResult;
	};

	configuration.factory('exerciseService', function() {
		return {
			listExercises: listExercises,
			listWorkouts: listWorkouts,
			preparedWorkouts: preparedWorkouts,
			preparedWorkout: preparedWorkout,
			KINDS: KINDS,
			WORKOUTS: WORKOUTS,
			EXERCISES: EXERCISES

		};
	});

})(); //EOF