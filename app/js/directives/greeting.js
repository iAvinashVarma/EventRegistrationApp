'use strict';

eventsApp
    .directive('greeting', function(){
        return {
            restrict: 'E',
            transclude: true,
            template: "<div><button class='btn' ng-click='sayHello()'>Say Hello</button></div><div ng-transclude></div>",
            controller: function($scope){
                var greetings = ['Hello'];
                $scope.sayHello = function(){
                    alert(greetings.join());
                }
                this.addGreeting = function(greeting){
                    greetings.push(greeting);
                }
            }
        }
    })
    .directive('finnish', function(){
        return {
            restrict: 'A',
            require: '^greeting',
            terminal: true,
            link: function(scope, element, attrs, controller){
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function(){
        return {
            restrict: 'A',
            require: '^greeting',
            link: function(scope, element, attrs, controller){
                controller.addGreeting('Namaste');
            }
        }
    })