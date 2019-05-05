'use strict';

describe('durations', function(){
    beforeEach(module('eventsApp'));

    it('Should return "Half Hour" when give a 1', inject(function(durationsFilter){
        expect(durationsFilter(1)).toEqual('Half Hour');
    }))

    it('Should return "1 Hour" when give a 2', inject(function(durationsFilter){
        expect(durationsFilter(2)).toEqual('1 Hour');
    }))

    it('Should return "Half Day" when give a 3', inject(function(durationsFilter){
        expect(durationsFilter(3)).toEqual('Half Day');
    }))

    it('Should return "Full Day" when give a 4', inject(function(durationsFilter){
        expect(durationsFilter(4)).toEqual('Full Day');
    }))

    it('Should return empty when give invalid value', inject(function(durationsFilter){
        expect(durationsFilter(5)).toEqual('');
    }))
});