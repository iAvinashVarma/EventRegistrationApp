'use strict';

eventsApp.directive('calculateHike', function($compile){
    return {
        restrict: 'E',
        link: function(scope, element, attrs, controller){
            var markup = "<div>Old Salary: <input type='number' ng-model='oldSalary' placeholder='Old Salary'/><br/>{{ oldSalary }}<br/>New Salary: <input type='number' ng-model='newSalary' placeholder='New Salary'/><br/>{{ newSalary }}<hr/>Hike Percentage: <p ng-if='newSalary && oldSalary'>{{ (newSalary - oldSalary)/oldSalary * 100 }}</p></div>";
            angular.element(element).html($compile(markup)(scope));
        },
        scope: {

        }
    };
});