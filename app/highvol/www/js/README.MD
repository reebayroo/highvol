#The exercise service 

- provides a list of sorted and grouped exercises that allow users to activate or deactivate an exercise used in the workouts
- groups this list of exercises according to type, muscle group and equipment, always sorting by name
- the types are:  
>    Compound, Isolation and N/A
- the muscle groups are: 
   > Abdominals, Abductors, Adductors, Biceps, Calves, Chest, Forearms, Glutes, Hamstrings , Lats , Lower Back , Middle Back, Neck, Quadriceps, Shoulders, Traps, Triceps
- the equipments are:
    > Bands , Foam Roll, Barbell , Kettlebells, Body Only , Machine, Cable , Medicine Ball, Dumbbell , None, E-Z Curl Bar , Exercise Ball, Other
    
- the exercise will have the properties:
    * group properties
    * name
    * id
    * targets sets (1 to 15)
    * targets reps  (1 to 15 to  failure)
 

# The workout template service

* provides a list of workouts templates with preselected exercises:
* a workout template will have a range from A to G representing every day of the week.
* will support the import and export of new templates like stronglifts and current

* will start with a default: (stronglifts)
* Templates will be addede along
* three templates: Dumbells Only, Power Rack (stronglifts) and Beginner
* another template: [tnation-basic]
    
    

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
