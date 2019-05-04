'use strict';

eventsApp.controller('editEventCtrl', 
    function editEventCtrl($scope, $log, eventData){
        $scope.saveEvent = function(event, newEventForm){
            console.log(newEventForm);
            eventData.getAllEvents()
                .$promise.then(
                    function(events){
                        $log.info('Events: ', events);
                        event.id = events.length + 1;
                        if(newEventForm.$valid){
                            eventData.save(event)
                                .$promise.then(
                                    function(response){
                                        $log.info('Success: ', response);
                                    }, function(response) {
                                        $log.error('Failure: ', response);
                                    }
                                );
                        }
                    }, function(response) {
                        $log.error('Failure: ', response);
                    }
                );
        }

        $scope.cancelEdit = function(){
             window.location = '/';
        }
    }
);