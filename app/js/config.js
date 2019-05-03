'use strict';

eventsApp.config(function($routeProvider, $locationProvider){
    $routeProvider.when("/newEvent", {
        templateUrl: 'templates/newEvent.html',
        controller: 'editEventCtrl'
    });

    $routeProvider.when("/events", {
        templateUrl: 'templates/eventList.html',
        controller: 'eventListCtrl',
        resolve: {
            events: function($route, eventData){
                return eventData.getAllEvents().$promise;
            }
        }
    });

    $routeProvider.when("/event/:eventId", {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventCtrl',
        resolve: {
            event: function($route, eventData){
                return eventData.getEvent($route.current.pathParams.eventId).$promise;
            }
        }
    });

    $routeProvider.when("/templates", {
        template: 'Howdy World!',
    });

    $routeProvider.otherwise({
        redirectTo: '/events'
    });

    $locationProvider.html5Mode(true);
});