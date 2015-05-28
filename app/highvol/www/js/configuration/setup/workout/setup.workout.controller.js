

(function() {
	'use strict';
	var module = angular.module(SETUP_WORKOUT.MODULE);
	console.log("******************************************************************");
	console.log("defining controller " +  SETUP_WORKOUT.CONTROLLER);
	console.log("******************************************************************");
	module.controller(SETUP_WORKOUT.CONTROLLER, function($scope) {
		function workouts(){
			return _.map(_.range(3), function(num){return {label: 'Workout ' + ( num + 1 )}});
		};
		$scope.days = _.map(_.range(7), function(num){return {label: 'Day ' + ( num + 1 ), workouts: workouts()}});
	});


})();
