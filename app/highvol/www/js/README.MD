#The exercise service (services.exercise.exerciseService)

- Provides the list of all exercises
- the types are:  

>    Compound, Isolation and N/A

- the muscle groups are: 

   > Abdominals, Abductors, Adductors, Biceps, Calves, Chest, Forearms, Glutes, Hamstrings , Lats , Lower Back , Middle Back, Neck, Quadriceps, Shoulders, Traps, Triceps

- the equipments are:
    > Bands , Foam Roll, Barbell , Kettlebells, Body Only , Machine, Cable , Medicine Ball, Dumbbell , None, E-Z Curl Bar , Exercise Ball, Other
    
- the routine will have the properties:
    * group properties
    * name
    * id
 

# The workout template service (services.workoutTemplate.workoutTemplateService)

* provides a list of workouts templates with preselected exercises:
* a workout template will have a range from A to G representing every day of the week.
* will support the import and export of new templates like stronglifts and current

* will start with a default
* will provide a list of custom workouts. 
* Templates will be added along the new versions of the app
* three templates: Dumbells Only, Power Rack (stronglifts) and Beginner
* another template: [tnation-basic]
    
    
# The configuration Exercise selection service (services.configExerciseSelection.exerciseSelectionService)
- provides a list of sorted and grouped exercises that allow users to activate or deactivate an exercise used in the workouts

- groups this list of exercises according to type, muscle group or equipment, always sorting secondly by name

- A selected routine should have 
    * the routine
    * targets sets (1 to 15)
    * targets reps  (1 to 15 to  failure)
    * selected
- retrieves the exercises list for the workout selected workout template for initial selection
- keeps the selection state for further retrievel of other services


# The configuration service 

* will interact with exercise service to get a list of active workouts
* will allow user to select what exercise will go to what workout: The workout selection
* The workout selection will be the final result for a new workout

# The workout service
* after the user setups the workout selection (or never set it up but uses the default seletion) the new workout will have 
    - the day of the workout, 
    - the next workout selection
* the workout selection will be the next in the queue of workouts, if the user worked on Workout B, then this will be workout C. 
* the use will see the selected exercises and to every workout

# The sets service

* will allow the record of new set: the reps and weights
* once the target of the exercise is reached, suggests increase of the weights 
* if the target of sets aren't reached suggest an increase of the reps
* will provide a  comparison against the previous set

[tnation-basic]:https://www.t-nation.com/workouts/primer-4-big-bad-basic-workouts
