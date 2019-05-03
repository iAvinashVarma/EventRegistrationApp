'use strict';

eventsApp.controller('editProfileCtrl', 
    function editProfileCtrl($scope, gravatarUrlBuilder){
        $scope.user = {};
        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };
    }
);