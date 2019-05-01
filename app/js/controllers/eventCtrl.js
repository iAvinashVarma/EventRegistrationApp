'use strict';

eventsApp.controller('eventCtrl', function EventController($scope, $log, $anchorScroll, $locale, eventData){
    $scope.sortorder = 'name';
    eventData.getEvent()
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
    $scope.scrollToSession = function(){
        $anchorScroll();
    }
});