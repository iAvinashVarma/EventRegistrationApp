'use strict';

eventsApp.controller('eventCtrl', function EventController($scope, $log, $routeParams, $route, eventData){
    $scope.sortorder = 'name';
    $scope.event = $route.current.locals.event;
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
    $scope.reload = function(){
        $route.reload();
    };
});