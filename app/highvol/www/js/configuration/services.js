/*jshint strict:false */

var configuration = angular.module('configuration.services', []);

console.log("inside configuration service %s", configuration);

configuration.factory('exerciseService', function() {
	return {
		retrieveListOfCompoundExercises: retrieveListOfCompoundExercises
	};
});


var retrieveListOfCompoundExercises = function() {
		var result = createNewList();
		localStorage["exercises"] = JSON.stringify(result);
		return result;
}; //retrieveListOfCompoundExercises


var createNewList = function() {
	var newWorkout = function(label) {
			return {
				id: uuid.v4(),
				active: false,
				targetSets: 10,
				text: label
			};
		}
		// 
	var result = ["Bench Press", "Bent Over Row", "Chin-Ups",
							  "Deadlifts", "Dips", "Incline Bench Press",
							   "Overhead Press", "Pull-Ups", "Squats"];

	return _.map(result, newWorkout);

}