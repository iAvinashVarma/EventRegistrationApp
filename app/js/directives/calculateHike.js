'use strict';

eventsApp.directive('calculateHike', function($compile){
    return {
        restrict: 'E',
        link: function(scope, element, attrs, controller){
            var markup = "<div>Old Salary: <input type='number' ng-model='oldSalary' placeholder='Old Salary'/><br/>New Salary: <input type='number' ng-model='newSalary' placeholder='New Salary'/><hr/>Hike Percentage: <p ng-bind='hikePercentage()'></p></div>"
            angular.element(element).html($compile(markup)(scope));
        }
    };
});