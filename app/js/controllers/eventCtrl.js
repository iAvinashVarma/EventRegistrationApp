'use strict';

eventsApp.controller('eventCtrl', function EventController($scope, $log, $routeParams, eventData){
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
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    }
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    }
});