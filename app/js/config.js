'use strict';

eventsApp.config(function($routeProvider){
    $routeProvider.when("/newEvent", {
        templateUrl: 'templates/newEvent.html',
        controller: 'editEventCtrl'
    });

    $routeProvider.when("/events", {
        templateUrl: 'templates/eventList.html',
        controller: 'eventListCtrl'
    });

    $routeProvider.when("/event/:eventId", {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventCtrl'
    });
});