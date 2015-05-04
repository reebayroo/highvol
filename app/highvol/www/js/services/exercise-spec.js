describe('@ services/exercise', function() {
	'use strict';
	// load the service's module
	beforeEach(module('services.exercise'));

	// instantiate service
	var exerciseService;

	beforeEach(inject(function(_exerciseService_) {
		exerciseService = _exerciseService_;
	}));

	describe('The exercise service', function() {
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
					[ exerciseService.muscles.Chest, 
					  exerciseService.muscles.Shoulders, 
					  exerciseService.muscles.Triceps]);
			});
			it('should have routineType', function() {
				expect(benchPress.routineType).toBeDefined();
			});
			it('should have equipment', function() {
				expect(benchPress.equipment).toBeDefined();
			});
		});
	});


});