module.exports = function(config){
  config.set({

    basePath : '../app',

    preprocessors:{
      '**/*.html': ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      // If your build process changes the path to your templates,
      // use stripPrefix and prependPrefix to adjust it.
      stripPrefix: "templates/directives/",
      prependPrefix: "/templates/directives/",
  
      // the name of the Angular module to create
      moduleName: "my.templates"
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
