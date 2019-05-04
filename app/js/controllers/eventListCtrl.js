'use strict';

eventsApp.controller('eventListCtrl',
    function eventListCtrl($scope, eventData){
        $scope.events = eventData.getAllEvents();
    }
);