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
		describe('Should have a default Program', function() {
			it('that is defined ', function() {
				expect(!!programsService.defaultProgram).toBe(true);
			});
			var extractRoutines = function(day){
				return _.map(day, function(item){ return item.routine; });
			}
			var check = function(workout) {
				expect(extractRoutines(programsService.defaultProgram[workout]))
					.toEqual(_.rest(arguments));

			}
			var selectWorkoutProgram = function(day, routine){
				return _.find(day, function(item){ return item.routine === routine; });
			}
			var checkProgram = function(day, expected){
				var actual = selectWorkoutProgram(programsService.defaultProgram[day], expected.routine);
				expect(actual).toBeDefined();
				expect(actual).toEqual(expected)
			}
			it('... with routines for day I ...', function() {
				check(workouts.day1, routines.benchPress, routines.bentOverRoll);
			});
			it('... with target sets and reps for bench press day I ...', function() {
				checkProgram(workouts.day1, { routine: routines.benchPress, 
																							targetSets:  3,
																							targetReps: 12 });
			});
			it('... with routines for day II ...', function() {
				check(workouts.day2, routines.squats, routines.chinUps);
			});
			it('... with routines for day III ...', function() {
				check(workouts.day3, routines.pullUps, routines.reverseGripEzCurl);
			});
			it('... with routines for day IV ...', function() {
				check(workouts.day4, routines.deadLifts, routines.overheadPress);
			});
			it('... with routines for day V ...', function() {
				check(workouts.day5, routines.dips, routines.barbellCurls);
			});
			it('... none for day VI ...', function() {
				check(workouts.day6);
			});
			it('... none for day VII ...', function() {
				check(workouts.day7);
			});
		});

	describe('Should have a extractRoutinesFromTemplate method', function() {
		it('that flattens all routines from a given template ', function() {

				var expected = [routines.benchPress, routines.bentOverRoll, routines.squats, routines.chinUps, routines.pullUps, routines.reverseGripEzCurl, routines.deadLifts, routines.overheadPress, routines.dips, routines.barbellCurls];

				expect(programsService.extractRoutinesFromTemplate(programsService.defaultProgram).length)
					.toEqual( expected.length);
		});
		
	});




	});


});