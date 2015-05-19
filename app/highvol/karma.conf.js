// Karma configuration
// Generated on Mon Apr 27 2015 06:34:42 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'www',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'lib/angular/angular.js', 
        'lib/angular-resource/angular-resource.js', 
        'lib/angular-mocks/angular-mocks.js', 
        'lib/lodash/lodash.js',
        'js/globals.js',
        'js/configuration/exercises/_module.js',
        'js/**/*.js'
    ],


    // list of files to exclude
    exclude: [
        'js/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'spec'],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Safari', 'PhantomJS'],

    plugins: [
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-safari-launcher",
      "karma-jasmine", 
      "karma-spec-reporter"
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
