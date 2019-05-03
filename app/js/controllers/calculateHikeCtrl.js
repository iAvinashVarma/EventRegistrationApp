'use strict';

eventsApp.controller('calculateHikeCtrl',
    function calculateHikeCtrl($scope){
        $scope.oldSalary = 0;
        $scope.newSalary = 0;
        $scope.hikePercentage = function(){
            var os = $scope.oldSalary;
            var ns = $scope.newSalary;
            if(os && ns && os > 0 && ns > 0){
                var diff = ns - os;
                var res = diff/os * 100;
                return res + '%';
            } else {
                return 'N/A';
            }
        };
    }
);