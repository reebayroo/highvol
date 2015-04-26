/*jshint strict:false */
(function(){
	"use strict";

	var configuration = angular.module('configuration.services', []);

	console.log("inside configuration service %s", configuration);

	configuration.factory('exerciseService', function() {
		return {
			listExercises: listExercises,
			listWorkouts : listWorkouts,
			kinds : { COMPOUND : COMPOUND, ISOLATION : ISOLATION }

		};
	});
	var COMPOUND = 'Compound';
	var ISOLATION = 'Isolation';

	var desc = function(label, kind){return {label:label, kind:kind}; };
	var compound = function(label){ return desc(label, COMPOUND); };
	var isolation = function(label){ return desc(label, ISOLATION); };


  var exercises = {
				benchPress:compound("Bench Press"),
				bentOverRoll:compound("Bent Over Barbell Row"),
				chinUps:compound("ChinUps"),
				deadLifts:compound("Deadlifts"),
				dips:compound("Dips"),
				inclineBenchPress:compound("Incline Bench Press"),
				overheadPress:compound("Overhead Press"),
				pullUps:compound("Pull-Ups"),
				squats:compound("Squats"),
				skullCrusher:isolation("Ez Bar Skullcrusher"),
				barbellCurls:isolation("Barbell Curls"), 
				sideLaterals:isolation("Dumbbell Side Laterals"), 
				reverseGripEzCurl:isolation("Reverse Grip Ez Bar Curl"), 
				stadingCalfRaise:isolation("Standing Calf Raise")

  };
  console.log(exercises);
	var listExercises = function() {
		// if (!this.loadedList)
			this.loadedList = createNewList();
			console.log(this.loadedList);
		return this.loadedList;
	};

	

	var createNewList = function() {

		var newWorkout = function(exercise) {
				return {
					id: uuid.v4(),
					targetSets: 10,
					text: exercise.label,
					kind: exercise.kind,
					active: true
				};
			}

			// 
		var result = [ 
				exercises.benchPress,
				exercises.bentOverRoll,
				exercises.chinUps,
				exercises.deadLifts,
				exercises.dips,
				exercises.inclineBenchPress,
				exercises.overheadPress,
				exercises.pullUps,
				exercises.squats,
				exercises.skullCrusher,
				exercises.barbellCurls,
				exercises.sideLaterals,
				exercises.reverseGripEzCurl,
				exercises.stadingCalfRaise
		];

		return _.chain(result).map(newWorkout).value();

	}

	function listWorkouts(){
		var selectable = function(item){return {exercise: item, selected: false}; };
		var activeExercises = _.filter(this.listExercises(), {active:true});
		var workouts = ["Workout A", "Workout B", "Workout C","Workout D"];
	  var workoutSets =  _.map(workouts,function(w){ return {title: w, worksets : _.map(activeExercises, selectable) }});
	  return {
	  	workouts: workoutSets	
	  };
	  // {
	  //   availableSets: ["Bench Press", "Pull Ups", "Chin ups", "Squats", "Dead Lifts"],
	  //   workouts: [{
	  //     title: "Workout A",
	  //     worksets: ["Squats", "Dead Lifts"]
	  //   }, {
	  //     title: "Workout B",
	  //     worksets: ["Bench Press", "Pull Ups", "Chin ups"]
	  //   }, {
	  //     title: "Workout C",
	  //     worksets: ["Bench Press", "Pull Ups", "Chin ups"]
	  //   }]
	  // }
	};


})(); //EOF
