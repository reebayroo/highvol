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

	var desc = function(id, label, kind){return {id: id, label:label, kind:kind}; };
	var compound = function(id, label){ return desc(id, label, COMPOUND); };
	var isolation = function(id, label){ return desc(id, label, ISOLATION); };


  var exercises = {
			benchPress:compound("851bfc7f-4064-4e76-8113-5ee61fc19e51","Bench Press"),
			bentOverRoll:compound("4973e2ed-5082-4b65-b79f-4d5260180188","Bent Over Barbell Row"),
			chinUps:compound("9e64213b-9882-40e4-a001-eae480ab07f2","ChinUps"),
			deadLifts:compound("66ce41f5-e914-40cf-9690-b98d54ce5bee","Deadlifts"),
			dips:compound("d5d13009-2e9f-45c9-bf29-d57d1aabe26a","Dips"),
			inclineBenchPress:compound("11f67231-7d99-4eb0-9f25-4ef9436e89ba","Incline Bench Press"),
			overheadPress:compound("24573dfb-ac3c-4390-bae9-d56137aa01c4","Overhead Press"),
			pullUps:compound("82ad8ea6-ab3c-4839-af22-a066eb0d46bd","Pull-Ups"),
			squats:compound("640f5b16-17de-4139-8a81-d62ba163ccf4","Squats"),
			skullCrusher:isolation("87d8e5e1-16ce-4b87-b326-6587c25b7c77","Ez Bar Skullcrusher"),
			barbellCurls:isolation("c20588b6-e7e1-4be6-9009-5acc9e46b95b","Barbell Curls"), 
			sideLaterals:isolation("2249509c-a289-4cfd-85cb-82bc00cf780d","Dumbbell Side Laterals"), 
			reverseGripEzCurl:isolation("a14fa4c2-a6ed-49b1-bd0b-47f86c19c31b","Reverse Grip Ez Bar Curl"), 
			stadingCalfRaise:isolation("37179b0c-f544-4105-b222-0994ba3859fe","Standing Calf Raise")

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
					id: exercise.id,
					targetSets: 10,
					text: exercise.label,
					kind: exercise.kind,
					active: true
				};
			};

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

	};

var listWorkouts = function (){
		var selectable = function(item){return {exercise: item, selected: false}; };
		var activeExercises = _.filter(this.listExercises(), {active:true});
		var workoutsWithExercises = function(w){ return {title: w, worksets : _.map(activeExercises, selectable) }; };
		
		var workouts = _.map(["A","B","C","D","E"], function(l){ return "Workout " + l; });
	  
	  var workoutSets =  _.map(workouts,workoutsWithExercises);
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
