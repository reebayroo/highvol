describe('@ services/wokout-templates', function() {
	'use strict';

	var mockWindow, mockModalSvc, sampleSvcObj;
	beforeEach(module('services.workoutTemplate', EXERCISE.MODULE));

	// instantiate service
	var workoutTemplateService,
		exerciseService,
		routines, workouts;

	beforeEach(inject(function(_workoutTemplateService_, _exerciseService_) {
		workoutTemplateService = _workoutTemplateService_;
		exerciseService = _exerciseService_;
		routines = exerciseService.routines;
		workouts = workoutTemplateService.workouts;

	}));

	describe('The workout template service', function() {
		it('should be defined', function() {
			expect(!!workoutTemplateService).toBe(true);
		});
		it('should depend on exercise template', function() {
			expect(!!exerciseService).toBe(true);
		});
		it('should see routines from exerciseService template', function() {
			expect(!!exerciseService.routines).toBe(true);
		});
		it('should have workouts', function() {
			expect(!!workoutTemplateService.workouts).toBe(true);
		});
		describe('Should have a default workout template', function() {
			it('that is defined ', function() {
				expect(!!workoutTemplateService.defaultTemplate).toBe(true);
			});
			var check = function(workout) {
				expect(workoutTemplateService.defaultTemplate[workout])
					.toEqual(_.rest(arguments));

			}
			it('... with routines for workoutA ...', function() {
				check(workouts.workoutA, routines.benchPress, routines.bentOverRoll);
			});
			it('... with routines for workoutB ...', function() {
				check(workouts.workoutB, routines.squats, routines.chinUps);
			});
			it('... with routines for workoutC ...', function() {
				check(workouts.workoutC, routines.pullUps, routines.reverseGripEzCurl);
			});
			it('... with routines for workoutD ...', function() {
				check(workouts.workoutD, routines.deadLifts, routines.overheadPress);
			});
			it('... with routines for workoutE ...', function() {
				check(workouts.workoutE, routines.dips, routines.barbellCurls);
			});
			it('... none for workoutF ...', function() {
				check(workouts.workoutF);
			});
			it('... none for workoutG ...', function() {
				check(workouts.workoutG);
			});
		});

	describe('Should have a extractRoutinesFromTemplate method', function() {
		it('that flattens all routines from a given template ', function() {

				var expected = [routines.benchPress, routines.bentOverRoll, routines.squats, routines.chinUps, routines.pullUps, routines.reverseGripEzCurl, routines.deadLifts, routines.overheadPress, routines.dips, routines.barbellCurls];

				expect(workoutTemplateService.extractRoutinesFromTemplate(workoutTemplateService.defaultTemplate).length)
					.toEqual( expected.length);
		});
		
	});




	});


});