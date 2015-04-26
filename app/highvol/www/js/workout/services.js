(function() {
	'use strict';
	var module = angular.module('workout.services', []);

	module.factory('workoutService', function() {
		return { 
			listWorksets: function() {
				return fakeWorkSets();
			},
			retrieveWorkset: function(worksetId) {
				return _.find(this.listWorksets(), function(item) {
					return worksetId == item.id;
				});
			},
			listLogs: function() {
				return fakeWorkout();
			}
		};
	});

})();


var fakeWorkSets = function() {
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
};
var fakeWorkout = function() {
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
};