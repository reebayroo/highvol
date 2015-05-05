describe('@ services/config-exercise-selection', function() {
	'use strict';

	var mockWindow, mockModalSvc, sampleSvcObj;
	beforeEach(module('services.configExerciseSelection', 'services.workoutTemplate', 'services.exercise'));

	// instantiate service
	var exerciseSelectionService,
		exerciseService,
		workoutTemplateService;
	beforeEach(inject(function(_exerciseSelectionService_, _workoutTemplateService_, _exerciseService_) {
		exerciseSelectionService = _exerciseSelectionService_;
		exerciseService = _exerciseService_;
		workoutTemplateService = _workoutTemplateService_;


	}));

	describe('The config exercise selection service', function() {
		it('should be defined', function() {
			expect(exerciseSelectionService).toBeDefined();
		});
		it('should depend on exercise template', function() {
			expect(exerciseService).toBeDefined();
		});
		it('should depend on workout template', function() {
			expect(workoutTemplateService).toBeDefined();
		});

		describe('should provide a list of selected exercises ', function() {

			it('that is defined', function() {
				expect(exerciseSelectionService.listSelection).toBeDefined();
			});

			describe('... that ... ', function() {
				var selection;
				beforeEach(function() {
					selection = exerciseSelectionService.listSelection();
				});
			it('contains all routines', function() {
				expect(selection).toBeDefined();
				expect(selection.length).toEqual(_.toArray(exerciseService.routines).length);
			});
			it('that should contain a routine with default target ', function() {
				var expected = { 
						routine: exerciseService.routines.benchPress, 
						selected: true,
						targetReps: 10, 
						targetSets: 10
				}
				expect(selection).toContain(expected);
			});



			});


		});
	});



});