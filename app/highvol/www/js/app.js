// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'configuration.controllers', 'workout.controllers'])

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
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.newWorkout', {
      url: "/new-workout",
      views: {
        'menuContent': {
          templateUrl: "templates/new-workout.html",
          controller: "WorkoutCtrl"

        }
      }
    })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent': {
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.log', {
      url: "/logs",
      views: {
        'menuContent': {
          templateUrl: "templates/logs.html",
          controller: 'LogsCtrl'

        }
      }
    })
    .state('app.config-workout', {
      url: "/config-workout",
      views: {
        'menuContent': {
          templateUrl: "templates/config-workout.html",
          controller: 'ConfigWorkoutCtrl'
        }
      }
    })
    .state('app.config-exercise', {
      url: "/config-exercise",
      views: {
        'menuContent': {
          templateUrl: "templates/config-exercise.html",
          controller: 'ConfigExerciseCtrl'
        }
      }
    })    
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.workset', {
    url: "/workset/:worksetId",
    views: {
      'menuContent': {
        templateUrl: "templates/workset.html",
        controller: 'WorksetCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});