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
            events: function(eventData){
                return eventData.getAllEvents().$promise;
            }
        }
    });

    $routeProvider.when("/calculateHike", {
        templateUrl: 'templates/calculateHike.html',
        controller: 'calculateHikeCtrl'
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

    $routeProvider.when("/about", {
        template: '<h2>About Me</h2><hr/><p>My name is Avinash.</p>',
    });

    $routeProvider.when("/editProfile", {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/events'
    });

    $locationProvider.html5Mode(true);
});