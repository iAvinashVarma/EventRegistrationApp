'use strict';

eventsApp.directive('calculateHike', function($compile){
    return {
        restrict: 'E',
        template: "<div>Old Salary: <input type='number' ng-model='oldSalary' placeholder='Old Salary'/><br/>{{ oldSalary }}<br/>New Salary: <input type='number' ng-model='newSalary' placeholder='New Salary'/><br/>{{ newSalary }}<hr/>Hike Percentage: <p ng-if='newSalary && oldSalary'>{{ (newSalary - oldSalary)/oldSalary * 100 }}</p></div>",
        scope: {
            event: '=event'
        }
    };
});