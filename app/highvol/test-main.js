var allTestFiles = [];
var TEST_REGEXP = /-spec\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // console.log("pathToModule " + pathToModule(file));
    allTestFiles.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // example of using shim, to load non AMD libraries (such as underscore and jquery)
  paths: {
    'angular': 'lib/angular/angular',
    'angularMocks': 'lib/angular-mocks/angular-mocks',
    'angularResource': 'lib/angular-resource/angular-resource',
    'config-services': 'js/configuration/services',
  },

  shim: {
    'underscore': {exports: '_'},
    'angular': {exports: 'angular'},
    'angularResource': {
            deps: ['angular'],
            exports: 'angularResource'
    },
    'angularMocks': {
        deps: ['angularResource'],
        exports: 'angularMocks'
    },
    'config-services' : {
        deps: ['angular'], 
        exports: 'configServices'
    },
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});