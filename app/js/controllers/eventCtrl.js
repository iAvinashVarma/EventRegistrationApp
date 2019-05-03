'use strict';

eventsApp.controller('eventCtrl', function EventController($scope, $log, $routeParams, $route, eventData){
    $scope.sortorder = 'name';
    eventData.getEvent($routeParams.eventId)
    .$promise.then(
        function(event){
            $scope.event = event;
            $log.info(event);
        }, function(response){
            $log.error(response);
        }
    );
    $log.info($route.current.foo);
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
});