// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'configuration.controllers', 'workout.controllers', EXERCISE.MODULE, SETUP_WORKOUT.MODULE])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  var route = function(state, url, templateLocation, controllerName) {
    $stateProvider.state(state, {
      parent: 'app', 
      url: url,
      views: {
        'menuContent': { //what is this???
          templateUrl: templateLocation,
          controller: controllerName
        }
      }
    })
  };

  route('newWorkout', "/new-workout", "templates/new-workout.html", "WorkoutCtrl");
  route('setup', "/setup", "templates/setup.html", 'ConfigWorkoutCtrl');
  route('setup2', "/setup/exercises", "templates/setup/exercises.html", EXERCISE.CONTROLLER);
  route('setup-workouts', "/setup/workouts", "templates/setup/workouts.html", SETUP_WORKOUT.CONTROLLER);

  // route('app.setup.exercises', "/setup-exercises", "templates/setup/exercises.html", 'ConfigWorkoutCtrl');
  // route('app.search', "/search", "templates/search.html");
  // route('app.browse', "/browse", "templates/browse.html");
  // route('app.log', "/logs", "templates/logs.html", 'LogsCtrl');
  route('config-workout', "/config-workout", "templates/config-workout.html", 'ConfigWorkoutCtrl');

  route('home', "/home", "templates/home.html", 'HomeCtrl');
  route('workset', "/workset/:worksetId", "templates/workset.html", 'WorksetCtrl');

  $stateProvider.state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});