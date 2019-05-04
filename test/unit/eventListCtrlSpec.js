'use strict';

describe('eventListCtrl', function(){
    var $controllerConstructor, scope, mockEventData;

    beforeEach(module('eventsApp'));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({
            getAllEvents: function(){
            }
        });
    }));

    it('Should set the scope events to the result of the eventData.getAllEvents', function(){
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);
        $controllerConstructor('eventListCtrl', {
            '$scope': scope,
            eventData: mockEventData
        })
        expect(scope.events).toBe(mockEvents);
    })
});