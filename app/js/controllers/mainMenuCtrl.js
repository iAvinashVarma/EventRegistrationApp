'use strict';

eventsApp.controller('mainMenuCtrl',
    function mainMenuCtrl($scope, $location, $log){
        $log.info('absUrl: ' + $location.absUrl());
        $log.info('protocols: ' + $location.protocol());
        $log.info('port: ' + $location.port());
        $log.info('host: ' + $location.host());
        $log.info('path: ' + $location.path());
        $log.info('search: ' + $location.search());
        $log.info('hash: ' + $location.hash());
        $log.info('url: ' + $location.url());
        $scope.createEvent = function(){
            $location.replace();
            $location.url('/newEvent');
        }
    }
);