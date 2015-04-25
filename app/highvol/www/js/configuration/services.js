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


	var listExercises = function() {
		if (!this.loadedList)
			this.loadedList = createNewList();
		return this.loadedList;
	};

	var COMPOUND = 'Compound';
	var ISOLATION = 'Isolation';

	var createNewList = function() {
		var desc = function(label, kind){return {label:label, kind:kind}; };
		var compound = function(label){ return desc(label, "Compound"); };
		var isolation = function(label){ return desc(label, "Isolation"); };
		var newWorkout = function(description) {
				return {
					id: uuid.v4(),
					active: false,
					targetSets: 10,
					text: description.label,
					kind: description.kind
				};
			}
			// 
		var result = [ 
				compound("Bench Press"),
				compound("Bent Over Row"),
				compound("Chin-Ups"),
				compound("Deadlifts"),
				compound("Dips"),
				compound("Incline Bench Press"),
				compound("Overhead Press"),
				compound("Pull-Ups"),
				compound("Squats"),
				isolation("Triceps EZ-BAR Skullcrusher"),
				isolation("Biceps Curls"), 
		];

		return _.chain(result).map(newWorkout).sortBy('text').value();

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
