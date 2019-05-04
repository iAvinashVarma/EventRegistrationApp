'use strict';

describe('editProfileCtrlSpec', function(){
    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module('eventsApp'));
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({
            buildGravatarUrl: function(){
            }
        });
    }));

    it('Should build the gravatar with the given email', function(){
        $controllerConstructor('editProfileCtrl',{
            '$scope': scope,
            gravatarUrlBuilder: mockGravatarUrlBuilder
        });
        var email = "angularjsdemo@gmail.com";
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    });
});