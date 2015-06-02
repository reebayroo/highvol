describe('@ configuration/programs', function() {
	'use strict';

	var mockWindow, mockModalSvc, sampleSvcObj;
	beforeEach(module('services.programs', EXERCISE.MODULE));

	// instantiate service
	var programsService,
		exerciseService,
		routines, workouts;

	beforeEach(inject(function(_programsService_, _exerciseService_) {
		programsService = _programsService_;
		exerciseService = _exerciseService_;
		routines = exerciseService.routines;
		workouts = programsService.workouts;

	}));

	describe('The workout programs service', function() {
		it('should be defined', function() {
			expect(!!programsService).toBe(true);
		});
		it('should depend on exercise service', function() {
			expect(!!exerciseService).toBe(true);
		});
		it('should see routines from exerciseService', function() {
			expect(!!exerciseService.routines).toBe(true);
		});
		it('should have workouts', function() {
			expect(!!programsService.workouts).toBe(true);
		});

		var verifyDayHasRotines = function(program, workout) {
			var extractRoutines = function(day) {
				return _.map(day, function(item) {
					return item.routine;
				});
			}

			expect(extractRoutines(program[workout]))
				.toEqual(_.rest(_.rest(arguments)));

		}
		var verifyRoutineIsInDay = function(program, day, expected) {
			var selectWorkoutProgram = function(day, routine) {
				return _.find(day, function(item) {
					return item.routine === routine;
				});
			}
			var actual = selectWorkoutProgram(program[day], expected.routine);
			expect(actual).toBeDefined();
			expect(actual).toEqual(expected)
		}

		describe('Should have a default Program', function() {
			it('that is defined ', function() {
				expect(!!programsService.defaultProgram).toBe(true);
			});
			it('that has a name ', function() {
				expect(programsService.defaultProgram.name).toEqual("default");
			});


			var defaultProgram;
			beforeEach(function() {
				defaultProgram = programsService.defaultProgram;
			});
			it('... with routines for day I ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day1, routines.benchPress, routines.bentOverRoll);
			});
			it('... with target sets and reps for bench press day I ...', function() {
				verifyRoutineIsInDay(defaultProgram, workouts.day1, {
					routine: routines.benchPress,
					targetSets: 3,
					targetReps: 12
				});
			});
			it('... with routines for day II ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day2, routines.squats, routines.chinUps);
			});
			it('... with routines for day III ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day3, routines.pullUps, routines.reverseGripEzCurl);
			});
			it('... with routines for day IV ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day4, routines.deadLifts, routines.overheadPress);
			});
			it('... with routines for day V ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day5, routines.dips, routines.barbellCurls);
			});
			it('... none for day VI ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day6);
			});
			it('... none for day VII ...', function() {
				verifyDayHasRotines(defaultProgram, workouts.day7);
			});
		});
		describe('Should have a list of programs', function() {
			it('that is defined', function() {
				expect(programsService.programs).toBeDefined();
			});
			describe('with five by five on it', function() {
				var program;
				beforeEach(function() {
					program =  programsService.programs[0];
				});
				it('that is defined', function() {
					expect(program).toBeDefined();
				});

				it('that contains name', function() {
					expect(program).toBeDefined();
					expect(program.name).toBeDefined();
					expect(program.name).toEqual("5 x 5");
				});
				it('that has workouts for day 1', function() {
					verifyDayHasRotines(program, workouts.day1, routines.squats, routines.benchPress, routines.bentOverRoll);
				});
				it('that has workouts for day 2', function() {
					verifyDayHasRotines(program, workouts.day2, routines.squats, routines.overheadPress, routines.deadLifts);
				});
				it('and none for the remaining days ', function() {
					verifyDayHasRotines(program, workouts.day3);
					verifyDayHasRotines(program, workouts.day4);
					verifyDayHasRotines(program, workouts.day5);
					verifyDayHasRotines(program, workouts.day6);
					verifyDayHasRotines(program, workouts.day7);
				});
			it('... with every routine with targes 5 and reps of 5', function() {
				verifyRoutineIsInDay(program, workouts.day1, {routine: routines.squats, targetSets: 5, targetReps: 5 });
				verifyRoutineIsInDay(program, workouts.day1, {routine: routines.benchPress, targetSets: 5, targetReps: 5 });
				verifyRoutineIsInDay(program, workouts.day1, {routine: routines.bentOverRoll, targetSets: 5, targetReps: 5 });
				verifyRoutineIsInDay(program, workouts.day2, {routine: routines.squats, targetSets: 5, targetReps: 5 });
				verifyRoutineIsInDay(program, workouts.day2, {routine: routines.deadLifts, targetSets: 5, targetReps: 5 });
				verifyRoutineIsInDay(program, workouts.day2, {routine: routines.overheadPress, targetSets: 5, targetReps: 5 });
			});


			});

		});

	});


});