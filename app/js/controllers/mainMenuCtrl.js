'use strict';

eventsApp.controller('mainMenuCtrl',
    function mainMenuCtrl($scope, $location, $window){
        $window.onload = function() {
            $(".navbar a").on("click", function(){
                $(".navbar").find(".active").removeClass("active");
                $(this).parent().addClass("active");
            });
        };

        $scope.createEvent = function(){
            $location.replace();
            $location.url('/newEvent');
        };

        $scope.editProfile = function(){
            $location.replace();
            $location.url('/editProfile');
        };

        $scope.about = function(){
            $location.replace();
            $location.url('/about');
        };

        $scope.home = function(){
            $location.replace();
            $location.url('/events');
        };
    }
);