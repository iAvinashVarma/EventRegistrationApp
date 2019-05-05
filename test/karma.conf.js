module.exports = function(config){
  config.set({

    basePath : '../app',

    preprocessors:{
      '**/*.html': 'ng-html2js'
    },

    files : [
      'lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '../test/lib/angular-mocks.js',
      '../test/lib/sinon-1.15.0.js',
      'js/**/*.js',
      '../test/unit/**/*.js',
      'templates/directives/eventThumbnail.html'
    ],

    autoWatch : false,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers : ['ChromeHeadless'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
