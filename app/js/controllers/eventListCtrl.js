'use strict';

eventsApp.controller('eventListCtrl',
    function eventListCtrl($scope, $location, eventData){
        $scope.events = eventData.getAllEvents();
    }
);