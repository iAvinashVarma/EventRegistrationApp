'use strict';

eventsApp.directive('greeting', function(){
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: '@',
        name: 'ctrl'
    }
});

eventsApp.controller('greetingCtrl', 
    function greetingCtrl($scope){
        $scope.sayHello = function(){
            alert('Hello');
        }
});