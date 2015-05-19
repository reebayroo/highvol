describe('@ configuration/exercises/exercises.controller', function() {
    describe('The Exercise  Controller', function() {
       
        beforeEach(module(EXERCISE.MODULE));

        var exerciseController,
            exerciseService,
            workoutTemplateService;
        beforeEach(inject(function( _exerciseService_, _exerciseController_) {
            exerciseService = _exerciseService_;
        }));
        it('should be injected with the service', function() {
            expect(exerciseService).toBeDefined();
        });        
        it('should be defined', function() {
            expect(exerciseController).toBeDefined();
        });



    });
});