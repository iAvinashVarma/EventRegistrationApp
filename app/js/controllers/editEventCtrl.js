'use strict';

eventsApp.controller('editEventCtrl', 
    function editEventCtrl($scope, $log, eventData){
        $scope.saveEvent = function(event, newEventForm){
            console.log(newEventForm);
            if(newEventForm.$valid){
                eventData.save(event)
                    .$promise.then(
                        function(response){
                            $log.info('Success', response);
                        }, function(response) {
                            $log.error('Failure', response);
                        }
                    );
            }
        }

        $scope.cancelEdit = function(){
             window.location = '/';
        }
    }
);