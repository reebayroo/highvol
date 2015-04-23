console.log("INSIDE CONFIGURATION");
console.log("INSIDE CONFIGURATION %s ", angular.module);
var configuration = angular.module('configuration');

// configuration.controller('ConfigWorkoutCtrl', function($scope) {
// 	$scope.configuration = retrieveConfiguration();
// 	$scope.moveItem = function() {};
// });
// configuration.controller('ConfigExerciseCtrl',
// 	function($scope) {
// 		console.log("inside .controller('ConfigExerciseCtrl', function($scope, exerciseService) {");
// 		console.log($scope);
// 		$scope.compoundExercises = [];
// 		$scope.moveItem = function() {};
// 	});

console.log("ARE WE LEAVEING CONFIGURATION");

console.log(configuration.value("ConfigWorkoutCtrl"));
// .controller('ConfigExerciseCtrl', ['exerciseService', 
// function($scope, exerciseService) {
//   console.log("inside .controller('ConfigExerciseCtrl', function($scope, exerciseService) {");
//   console.log(exerciseService);
//   console.log(exerciseService.retrieveListOfCompoundExercises);
//   $scope.compoundExercises = exerciseService.retrieveListOfCompoundExercises();
//   $scope.moveItem = function(){};
// }
// ]);

var retrieveConfiguration = function() {
	return {
		availableSets: ["Bench Press", "Pull Ups", "Chin ups", "Squats", "Dead Lifts"],
		workouts: [{
			title: "Workout A",
			worksets: ["Squats", "Dead Lifts"]
		}, {
			title: "Workout B",
			worksets: ["Bench Press", "Pull Ups", "Chin ups"]
		}, {
			title: "Workout C",
			worksets: ["Bench Press", "Pull Ups", "Chin ups"]
		}]
	};
};


var WorksetService = function() {};

WorksetService.prototype = {
	listWorksets: function() {
		return [{
			title: 'Squats',
			id: 0
		}, {
			title: 'Overhead Press',
			id: 1
		}, {
			title: 'DeadLifts',
			id: 2
		}, {
			title: 'Chin Ups',
			id: 3
		}];

	},
	retrieveWorkset: function(worksetId) {
		var result = _.find(this.listWorksets(), function(item) {
			return worksetId == item.id;
		});
		console.log("retrieveWorkset %s %s ", worksetId, result);
		return result;
	},
	listLogs: function() {
		return {
			workouts: [{
				date: 'Mar 12th',
				workout: [{
					title: "Squats",
					sets: ["125 X 5", "125 X 5", "125 X 5", "125 X 5"]
				}, {
					title: "Dead Lifts",
					sets: ["125 X 5", "125 X 5", "125 X 5"]
				}, ]
			}, {
				date: 'Mar 10th',
				workout: [{
					title: "Squats",
					sets: ["125 X 5", "125 X 5", "125 X 5"]
				}, {
					title: "Dead Lifts",
					sets: ["125 X 5", "125 X 5", "125 X 5"]
				}, ]
			}],
			measurements: [{
				date: 'Mar 12th',
				waistLine: '38.5"',
				bmi: "35%",
				weight: "189"
			}, {
				date: 'Mar 10th',
				waistLine: '38.5"',
				bmi: "35%",
				weight: "189"
			}]
		};
		// return [
		//   { date: 'Mar 10th', 
		//     [{title: "Squats", 
		//       sets:  ["125 X 5", "125 X 5", "125 X 5" ] }, 
		//      {title: "Dead Lifts", 
		//       sets: ["125 X 5", "125 X 5", "125 X 5" ] },
		//     ]
		//   },
		//   { date: 'Mar 8th', 
		//     [{title: "Squats", 
		//       sets:  ["125 X 5", "125 X 5", "125 X 5" ] }, 
		//      {title: "Dead Lifts", 
		//       sets: ["125 X 5", "125 X 5", "125 X 5" ] },
		//     ]
		//   },
		// ];
	}

};
var worksetService = new WorksetService();