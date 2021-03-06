describe('@ exercise.services', function() {
	'use strict';

	describe('The exercise service', function() {

		// load the service's module
		beforeEach(module(EXERCISE.MODULE));

		// instantiate service
		var exerciseService;

		beforeEach(inject(function(_exerciseService_) {
			exerciseService = _exerciseService_;
		}));

		it('should be defined', function() {
			expect(!!exerciseService).toBe(true);
		});
		it('should have types', function() {
			expect(!!exerciseService.types).toBe(true);

		});
		it('should have muscles', function() {
			expect(!!exerciseService.muscles).toBe(true);

		});
		it('should have equipments', function() {
			expect(!!exerciseService.equipments).toBe(true);
		});
		it('should have routines', function() {
			expect(!!exerciseService.routines).toBe(true);
		});

		describe('... Routines', function() {
			var benchPress;
			beforeEach(function() {
				benchPress = exerciseService.routines.benchPress;
			});
			it('should be defined', function() {
				expect(!!benchPress).toBe(true);
			});
			it('should have targetMuscles', function() {
				expect(benchPress.targetMuscles).toEqual(
					[exerciseService.muscles.Chest,
						exerciseService.muscles.Shoulders,
						exerciseService.muscles.Triceps
					]);
			});
			it('should have routineType', function() {
				expect(benchPress.routineType).toBeDefined();
			});
			it('should have equipment', function() {
				expect(benchPress.equipment).toBeDefined();
			});
		});

		describe('The search method', function() {
			it('should be defined', function() {
				expect(exerciseService.search).toBeDefined();
			});
			it('should find routines by name', function() {
				expect(exerciseService.search("bench")).toContain(exerciseService.routines.benchPress);				
			});
			it('should find routines by muscle ', function() {
				expect(exerciseService.search("shoulder")).toContain(exerciseService.routines.overheadPress);
			});
			it('should find routines by equipment ', function() {
				expect(exerciseService.search("machine")).toContain(exerciseService.routines.stadingCalfRaise);
			});			
			it('should not bring routines that dont match in any of the criterias ', function() {
				expect(exerciseService.search("glutes chinup").length).toEqual(0);
			});			
		});
	});

	xdescribe('the config exercise selection service', function() {



		var mockWindow, mockModalSvc, sampleSvcObj;
		beforeEach(module('services.configExerciseSelection', 'services.programs', EXERCISE.MODULE));


		// instantiate service
		var exerciseSelectionService,
			exerciseService,
			programsService;
		beforeEach(inject(function(_exerciseSelectionService_, _programsService_, _exerciseService_) {
			exerciseSelectionService = _exerciseSelectionService_;
			exerciseService = _exerciseService_;
			programsService = _programsService_;


		}));

		it('should be defined', function() {
			expect(exerciseSelectionService).toBeDefined();
		});
		it('should depend on exercise template', function() {
			expect(exerciseService).toBeDefined();
		});
		it('should depend on workout template', function() {
			expect(programsService).toBeDefined();
		});

		describe('should provide a list of selected exercises ', function() {

			it('that is defined', function() {
				expect(exerciseSelectionService.selectableRoutinesList).toBeDefined();
			});

			describe('... that ... ', function() {
				var selection;
				beforeEach(function() {
					selection = exerciseSelectionService.selectableRoutinesList();
				});
				it('contains all routines', function() {
					expect(selection.length).toEqual(_.toArray(exerciseService.routines).length);
				});
				it('that should contain a routine with default target ', function() {

					expect(selection).toContain({
						routine: exerciseService.routines.benchPress,
						selected: true,
						targetReps: 10,
						targetSets: 10
					});
				});


				it('that routines that belongs to the default template will be selected', function() {
					var lengthOfWorkoutTemplateWorkouts = function(defaultProgram) {
						//

						return _.reduce(
							Object.keys(defaultProgram),
							function(sum, key) {
								return sum + defaultProgram[key].length;
							}, 0);

					};


					var expectedListLength = lengthOfWorkoutTemplateWorkouts(programsService.defaultProgram);
					var selectedSelection = _.filter(selection, function(item) {
						return item.selected;
					});
					expect(selectedSelection.length).toEqual(expectedListLength);

				});

				it('keep state and not change  ...', function() {
					var firstItem = exerciseSelectionService.selectableRoutinesList()[0];
					firstItem.targetReps = 20;
					firstItem.targetSets = 3;
					expect(exerciseSelectionService.selectableRoutinesList()).toContain(firstItem);

				});

			});


		});



	});

});