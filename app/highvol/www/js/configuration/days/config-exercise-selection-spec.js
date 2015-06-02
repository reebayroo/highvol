xdescribe('@ services/config-exercise-selection', function() {
	'use strict';


	describe('The config exercise selection service', function() {


		var mockWindow, mockModalSvc, sampleSvcObj;
		beforeEach(module('services.configExerciseSelection', PROGRAMS.MODULE, EXERCISE.MODULE));


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
					var lengthOfWorkoutTemplateWorkouts = function(defaultTemplate) {
						//

						return _.reduce(
							Object.keys(defaultTemplate),
							function(sum, key) {
								return sum + defaultTemplate[key].length;
							}, 0);

					};


					var expectedListLength = lengthOfWorkoutTemplateWorkouts(programsService.defaultTemplate);
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

//moved from programsService, no business over there
	describe('Should have a extractRoutinesFromTemplate method', function() {
		it('that flattens all routines from a given template ', function() {

				var expected = [routines.benchPress, routines.bentOverRoll, routines.squats, routines.chinUps, routines.pullUps, routines.reverseGripEzCurl, routines.deadLifts, routines.overheadPress, routines.dips, routines.barbellCurls];

				expect(programsService.extractRoutinesFromTemplate(programsService.defaultProgram).length)
					.toEqual( expected.length);
		});
		
	});


}); //EOF