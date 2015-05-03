'use strict';

describe('Service: configurationService', function() {

	// load the service's module
	beforeEach(module('configuration.services'));

	// instantiate service
	var exerciseService, CURRENT_SIZE = 14;
	var WORKOUTS;
	var EXERCISES;

	beforeEach(inject(function(_exerciseService_) {
		exerciseService = _exerciseService_;
		WORKOUTS = exerciseService.WORKOUTS;
		EXERCISES = exerciseService.EXERCISES;

	}));



	describe('The exercise service', function() {
		it('should be defined', function() {
			expect(!!exerciseService).toBe(true);
		});
		describe('has  listExercises ... ', function() {
			it('that is defined', function() {
				expect(!!exerciseService.listExercises).toBe(true);
			});
			it('that is predefined', function() {
				var actual = exerciseService.listExercises();
				expect(actual.length).toBe(CURRENT_SIZE);

			});
			it('that returns exercises with id, targetSets, text, kind and active ...', function() {
				var actual = exerciseService.listExercises()[0];
				var expected = {
					id: '851bfc7f-4064-4e76-8113-5ee61fc19e51',
					targetSets: 10,
					text: 'Bench Press',
					kind: 'Compound',
					active: true,
					toString: actual.toString
				};

				expect(actual).toEqual(expected);
			});

		});
		describe('has WORKOUTS with ', function() {
			_.each(["A", "B", "C", "D", "E", "F", "G"], function(letter) {
				it(" WORKOUT_" + letter, function() {
					expect(WORKOUTS["WORKOUT_" + letter]).toBeDefined();
				});
			})
		});


		describe('has predefinedWorkouts ', function() {
			var rows;
			beforeEach(function() {
				rows = [
					[WORKOUTS.WORKOUT_A, EXERCISES.benchPress, EXERCISES.bentOverRoll],
					[WORKOUTS.WORKOUT_B, EXERCISES.squats, EXERCISES.barbellCurls]
				];

			});
			_.each(_.range(2), function(rowIndex) {
				it("Predefined " + rowIndex, function() {
					var row = rows[rowIndex];

								var workout = _.first(row);
								var exercises = _.rest(row);

					var actual = exerciseService.preparedWorkout("default");

					expect(actual).toBeDefined();
					expect(actual[workout]).toBeDefined();
					expect(actual[workout]).toEqual(exercises);
				});
			});
		});

		describe('has preparedWorkouts ', function() {

			it('that is defined', function() {
				expect(exerciseService.preparedWorkouts).toBeDefined();
			});

			it('that returns a list of predefined workouts', function() {
				expect(exerciseService.preparedWorkouts())
					.toEqual(["default"]);
			});
		});


		describe('has listWorkouts that', function() {

			it('... is defined', function() {
				expect(!!exerciseService.listWorkouts).toBe(true);
			});
			it('... has seven Workouts', function() {
				var toTitles = function(item) {
					return item.workout
				};
				var names = _.map(exerciseService.listWorkouts(), toTitles);
				expect(names).toEqual([WORKOUTS.WORKOUT_A,
					WORKOUTS.WORKOUT_B,
					WORKOUTS.WORKOUT_C,
					WORKOUTS.WORKOUT_D,
					WORKOUTS.WORKOUT_E,
					WORKOUTS.WORKOUT_F,
					WORKOUTS.WORKOUT_G
				]);
			});
			it('... each with its own copy of exercises', function() {
				var names = _.forEach(
					exerciseService.listWorkouts(),
					function(item, index) {
						expect(item.worksets.length).toEqual(CURRENT_SIZE);
					});
			});

			function verify(selectedExercises) {
				var expectedExercises = _.rest(arguments);

				expect(selectedExercises.length).toBe(2);
				var justExercises = _.map(selectedExercises, function(item) {
					return item.exercise.id;
				});
				expect(justExercises)
					.toEqual(_.map(expectedExercises, "id"));


			}


			it('The workout A will have benchPress and bentOverRoll on', function() {
				var workoutA = _.findWhere(exerciseService.listWorkouts(), {
					workout: WORKOUTS.WORKOUT_A
				});

				var selectedEx = _.select(workoutA.worksets, {
					selected: true
				});
				verify(selectedEx, EXERCISES.benchPress, EXERCISES.bentOverRoll);
			});

		});
	});
});