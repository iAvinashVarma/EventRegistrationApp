'use strict';

describe('eventThumbnail', function(){
    var el;
    // beforeEach(module('eventsApp'));
    // beforeEach(module('/templates/directives/eventThumbnail.html'));
    var compile, directiveElem, scope;
    beforeEach(function() {
        module('eventsApp');
        module('my.templates')
        inject(function ($compile, $rootScope) {
          compile=$compile;
          scope=$rootScope.$new();
          scope.event = {
                    id: 1,
                    name: 'Angular Expo',
                    date: '11/11/2015',
                    time: '10:30am',
                    location: {
                        address: '1234 Street',
                        city: 'Hyderabad',
                        province: 'Telangana'
                    }
                }
        });
        directiveElem = getCompiledElement();
      });
      
      function getCompiledElement(){
        var compiledDirective = compile(angular.element('<event-thumbnail event="event" />'))(scope);
        scope.$digest();
        return compiledDirective;
      }
    
    it('Should bind the data', function(){
        expect(directiveElem.text()).toContain('Angular Expo');
    })
})