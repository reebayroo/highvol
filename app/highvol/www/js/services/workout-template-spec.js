describe('@ services/wokout-templates', function() {
	'use strict';

	var mockWindow, mockModalSvc, sampleSvcObj;
beforeEach( module('services.workoutTemplate', 'services.exercise'));

	// instantiate service
	var workoutTemplateService,
			exerciseService,
			routines;

	beforeEach(inject(function(_workoutTemplateService_, _exerciseService_) {
		workoutTemplateService = _workoutTemplateService_;
		exerciseService = _exerciseService_;
		routines =  exerciseService.routines;

	}));

	describe('The workout template service', function() {
		it('should be defined', function() {
			expect(!!workoutTemplateService).toBe(true);
		});
		it('should depend on exercise template', function() {
			expect(!!exerciseService).toBe(true);		
		});
		it('should see routines from exerciseService template', function() {
			console.log("exerciseService");
			console.log(Object.keys(exerciseService));
			expect(!!exerciseService.routines).toBe(true);		
		});
		it('should have workouts', function() {
			expect(!!workoutTemplateService.workouts).toBe(true);
		});
		it('should have a default workout template...', function() {
			expect(!!workoutTemplateService.defaultTemplate).toBe(true);
		});
		it('... with workouts A ...', function() {
			expect(workoutTemplateService.defaultTemplate[workoutTemplateService.workouts.workoutA ])
				.toEqual([routines.benchPress, routines.bentOverRoll]);
		});

 
	});


});