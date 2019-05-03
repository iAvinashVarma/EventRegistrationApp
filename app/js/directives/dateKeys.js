'use strict';

eventsApp.directive('dateKeys', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            element.on('keydown', function(event){
                var keyCode = event.keyCode;
                if(isNumericKeyCode(keyCode) || isForwardSlashKeyCode(keyCode) || isNavigateKeyCode(keyCode)){
                    return true;
                }
                return false;
            });
        }
    };

    function isNumericKeyCode(keyCode) {
        return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
    }

    function isForwardSlashKeyCode(keyCode) {
        return keyCode === 191;
    }

    function isNavigateKeyCode(keyCode) {
        switch (keyCode) {
            case 8:     // backspace
            case 35:    // end
            case 36:    // home
            case 37:    // left
            case 38:    // up
            case 39:    // right
            case 40:    // down
            case 45:    // insert
            case 46:    // delete
                return true;
            default:
                return false;
        }
    }
});