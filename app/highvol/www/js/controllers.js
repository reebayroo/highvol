angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HomeCtrl', function($scope) {
  $scope.playlists = [{
    title: 'Reggae',
    id: 1
  }, {
    title: 'Chill',
    id: 2
  }, {
    title: 'Dubstep',
    id: 3
  }, {
    title: 'Indie',
    id: 4
  }, {
    title: 'Rap',
    id: 5
  }, {
    title: 'Cowbell',
    id: 6
  }];
})

.controller('WorkoutCtrl', function($scope) {
  $scope.worksets = worksetService.listWorksets();
})

.controller('WorksetCtrl', function($scope, $stateParams) {
  $scope.workset = worksetService.retrieveWorkset($stateParams.worksetId);
})

.controller('LogsCtrl', function($scope) {
  $scope.logs = worksetService.listLogs();
})

.controller('ConfigWorkoutCtrl', function($scope) {
  $scope.configuration = retrieveConfiguration();
  $scope.moveItem = function(){};
})

// .controller('ConfigExerciseCtrl', function($scope) {
//   $scope.compoundExercises = retrieveListOfCompoundExercises();
//   $scope.moveItem = function(){};
// })

;

// var retrieveListOfCompoundExercises = function(){
//   var _id = 0;
//   var id = function(){return _id++};
//   return [
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Bench Press"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Bent Over Row"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Chin-Ups"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Deadlifts"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Dips"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Incline Bench Press"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Overhead Press"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Pull-Ups"},
// {id: id(), checked:(_id % 2 == 0), targetSets:10, text: "Squats"}
// ];
// }
var retrieveConfiguration = function() {
  return {
    availableSets: ["Bench Press", "Pull Ups", "Chin ups", "Squats", "Dead Lifts"],
    workouts: [{
      title: "Workout A",
      worksets: ["Squats", "Dead Lifts"]
    }, {
      title: "Workout B",
      worksets: ["Bench Press", "Pull Ups", "Chin ups"]
    }, {
      title: "Workout C",
      worksets: ["Bench Press", "Pull Ups", "Chin ups"]
    }]
  }
}


var WorksetService = function() {}

WorksetService.prototype = {
  listWorksets: function() {
    return [{
      title: 'Squats',
      id: 0
    }, {
      title: 'Overhead Press',
      id: 1
    }, {
      title: 'DeadLifts',
      id: 2
    }, {
      title: 'Chin Ups',
      id: 3
    }];

  },
  retrieveWorkset: function(worksetId) {
    var result = _.find(this.listWorksets(), function(item) {
      return worksetId == item.id;
    });
    console.log("retrieveWorkset %s %s ", worksetId, result);
    return result;
  },
  listLogs: function() {
    return {
      workouts: [{
        date: 'Mar 12th',
        workout: [{
          title: "Squats",
          sets: ["125 X 5", "125 X 5", "125 X 5", "125 X 5"]
        }, {
          title: "Dead Lifts",
          sets: ["125 X 5", "125 X 5", "125 X 5"]
        }, ]
      }, {
        date: 'Mar 10th',
        workout: [{
          title: "Squats",
          sets: ["125 X 5", "125 X 5", "125 X 5"]
        }, {
          title: "Dead Lifts",
          sets: ["125 X 5", "125 X 5", "125 X 5"]
        }, ]
      }],
      measurements: [{
        date: 'Mar 12th',
        waistLine: '38.5"',
        bmi: "35%",
        weight: "189"
      }, {
        date: 'Mar 10th',
        waistLine: '38.5"',
        bmi: "35%",
        weight: "189"
      }]
    };
    // return [
    //   { date: 'Mar 10th', 
    //     [{title: "Squats", 
    //       sets:  ["125 X 5", "125 X 5", "125 X 5" ] }, 
    //      {title: "Dead Lifts", 
    //       sets: ["125 X 5", "125 X 5", "125 X 5" ] },
    //     ]
    //   },
    //   { date: 'Mar 8th', 
    //     [{title: "Squats", 
    //       sets:  ["125 X 5", "125 X 5", "125 X 5" ] }, 
    //      {title: "Dead Lifts", 
    //       sets: ["125 X 5", "125 X 5", "125 X 5" ] },
    //     ]
    //   },
    // ];
  }

}
var worksetService = new WorksetService();