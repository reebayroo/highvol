/*jshint strict:false */
(function() {
	"use strict";


	var newWorkout = function(name, id) {
		return {
			name: name,
			id: id,
			toString: function() {
				return name;
			}
		}
	};


	var types = {
		compound: 'Compound',
		isolation: 'Isolation',
		na: "N/A"

	};
	var equipment = function(id, label){
		return {id:id, label:label};
	}
  var equipments = {
      Bands: equipment("38c53483-f675-4884-935e-971f3e85ed53", "Bands"),
      Foam_Roll: equipment("85b583a6-fc43-4771-bc86-bf864ca70d18", "Foam Roll"),
      Barbell : equipment("e6a04d97-81c6-4c13-b043-0d17e30aebeb", "Barbell "),
      Kettlebells: equipment("fdc246ca-915b-4743-8582-b6a20c138003", "Kettlebells"),
      Body_Only : equipment("949871f7-5a40-493d-8fbe-d7e11564f4fb", "Body Only "),
      Machine: equipment("1e7cf51f-46e3-45e6-8623-222d63eca196", "Machine"),
      Cable : equipment("ace8bcd1-6de5-4ae7-9ea6-dab8df0491bf", "Cable "),
      Medicine_Ball: equipment("a5776590-2fd4-4710-8fa2-e8111da9de57", "Medicine Ball"),
      Dumbbell : equipment("b397d6be-d817-4be9-b5a4-06db6ef0ad00", "Dumbbell "),
      None: equipment("039b00eb-3149-4a13-935e-09a718751c21", "None"),
      EZ_Curl_Bar : equipment("8f7f01cb-7952-462a-b299-03bcbced4335", "E-Z Curl Bar "),
      Exercise_Ball: equipment("8653de42-cfc2-4a0d-b14f-eb09ce1b8ec6", "Exercise Ball"),
      Other: equipment("76c7c4b4-e6b7-4b03-a323-e05c29fd3ffe", "Other")
  };

  var muscle = function(id, label){
		return {id:id, label:label};
	}  



	var muscles = {
		Abdominals:muscle("426f7bb5-d63d-4419-abba-7c653463e177", "Abdominals"),
		Abductors:muscle("aa87f840-6bde-42b6-a5b3-c1a43193b338", "Abductors"),
		Adductors:muscle("833e52ce-e6b4-4a37-aaa0-e1e4a4ff30ad", "Adductors"),
		Biceps:muscle("497ad938-d857-4704-9a97-ed0d292ef685", "Biceps"),
		Calves:muscle("6369399a-4f73-4909-aacd-d2bb5eead7fd", "Calves"),
		Chest:muscle("ceca52e8-d2c8-4509-8372-af94c30511d8", "Chest"),
		Forearms:muscle("28ab3b7b-cb01-409b-961f-45d8842a9354", "Forearms"),
		Glutes:muscle("a91c2149-cb37-425a-aa57-ce4060a66600", "Glutes"),
		Hamstrings:muscle("d16db67c-81d0-4a5f-ae47-70648f178c60", "Hamstrings"),
		Lats:muscle("f330f7b9-0b37-4f9c-8634-2ef09f1403b9", "Lats"),
		Lower_Back:muscle("effbb6e1-e850-4d20-8fd0-774c73738c30", "Lower_Back"),
		Middle_Back:muscle("c7f055da-78da-40e7-a971-69666d5ad3fa", "Middle_Back"),
		Neck:muscle("e541d069-6940-4b96-93e0-cccd5a963dee", "Neck"),
		Quadriceps:muscle("6b423aa3-a23d-4f0c-b504-1f70571f224e", "Quadriceps"),
		Shoulders:muscle("2041ebef-9b32-456a-8070-9a1289735649", "Shoulders"),
		Traps:muscle("89345aec-7e93-4260-95d9-347e425cead5", "Traps"),
		Triceps:muscle("c16ba888-7012-43c9-86b3-a346dded4416", "Triceps"),
	};

	var routine = function(equipment, routineType, id, label) {
		return function(){ 
				return {
						id: id,
						label: label,
						routineType: routineType,
						equipment:equipment, 
						targetMuscles : _.toArray(arguments),
						muscleTags : _.map(_.toArray(arguments), function(muscle){ return muscle.label; }).join(","),
						toString: function() {
							return this.label;
						}
				};
			};
	};	
	var routines = {
		benchPress: routine(equipments.Barbell, types.compound,"851bfc7f-4064-4e76-8113-5ee61fc19e51", "Bench Press")( 
		 muscles.Chest, muscles.Shoulders, muscles.Triceps),
		bentOverRoll: routine(equipments.Barbell, types.compound,"4973e2ed-5082-4b65-b79f-4d5260180188", "Bent Over Barbell Row")( 
		 muscles.Middle_Back, muscles.Lower_Back, muscles.Lats),
		chinUps: routine(equipments.Barbell, types.compound,"9e64213b-9882-40e4-a001-eae480ab07f2", "ChinUps")( 
		 muscles.Biceps,muscles.Middle_Back, muscles.Lats),
		deadLifts: routine(equipments.Barbell, types.compound,"66ce41f5-e914-40cf-9690-b98d54ce5bee", "Deadlifts")( 
		 muscles.Chest),
		dips: routine(equipments.Barbell, types.compound,"d5d13009-2e9f-45c9-bf29-d57d1aabe26a", "Dips")( 
		 muscles.Chest),
		inclineBenchPress: routine(equipments.Barbell, types.compound,"11f67231-7d99-4eb0-9f25-4ef9436e89ba", "Incline Bench Press")( 
		 muscles.Chest),
		overheadPress: routine(equipments.Barbell, types.compound,"24573dfb-ac3c-4390-bae9-d56137aa01c4", "Overhead Press")( 
		 muscles.Shoulders, muscles.Chest),
		pullUps: routine(equipments.Barbell, types.compound,"82ad8ea6-ab3c-4839-af22-a066eb0d46bd", "Pull-Ups")( 
		 muscles.Chest),
		squats: routine(equipments.Barbell, types.compound,"640f5b16-17de-4139-8a81-d62ba163ccf4", "Squats")( 
		 muscles.Chest),
		skullCrusher: routine(equipments.Barbell, types.isolation,"87d8e5e1-16ce-4b87-b326-6587c25b7c77", "Ez Bar Skullcrusher")( 
		 muscles.Chest),
		barbellCurls: routine(equipments.Barbell, types.isolation,"c20588b6-e7e1-4be6-9009-5acc9e46b95b", "Barbell Curls")( 
		 muscles.Chest),
		sideLaterals: routine(equipments.Barbell, types.isolation,"2249509c-a289-4cfd-85cb-82bc00cf780d", "Dumbbell Side Laterals")( 
		 muscles.Chest),
		reverseGripEzCurl: routine(equipments.Barbell, types.isolation,"a14fa4c2-a6ed-49b1-bd0b-47f86c19c31b", "Reverse Grip Ez Bar Curl")( 
		 muscles.Chest),
		stadingCalfRaise: routine(equipments.Machine, types.isolation,"37179b0c-f544-4105-b222-0994ba3859fe", "Standing Calf Raise")( 
		 muscles.Chest)

	};
	// console.log(routines);
	var listExercises = function() {
		// if (!this.loadedList)
		this.loadedList = createNewList();
		//console.log(this.loadedList);
		return this.loadedList;
	};

	var search = function(searchText){
		var re = new RegExp(searchText, "i");
		var match = function(s){
			return s.search(re) > -1;
		}

		return _.filter(routines, function(routine){return match(routine.label) || match(routine.equipment.label) || match(routine.muscleTags) });
	};


	var _module = angular.module(EXERCISE.MODULE);

	_module.factory(EXERCISE.SERVICE, function() {
		return {
			// listExercises: listExercises,
			types: types,
			routines: routines,
			equipments: equipments,
			muscles: muscles,
			search: search
		};
	});

})(); //EOF