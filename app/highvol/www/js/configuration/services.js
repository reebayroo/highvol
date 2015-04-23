/*jshint strict:false */
var configuration = angular.module('configuration');
configuration.factory('exerciseService', [function() {
	return {
		retrieveListOfCompoundExercises: retrieveListOfCompoundExercises
	};
}]);

var retrieveListOfCompoundExercises = function() {
	var _id = 0;

	var id = function() {
		return _id++;
	};

	var result = [{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Bench Press"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Bent Over Row"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Chin-Ups"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Deadlifts"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Dips"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Incline Bench Press"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Overhead Press"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Pull-Ups"},
	{id: id(), checked: (_id % 2 === 0), targetSets: 10, text: "Squats"
	}];
	return result;
}; //retrieveListOfCompoundExercises