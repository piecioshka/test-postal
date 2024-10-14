'use strict';

var Person = require('../../src/scripts/person');

describe('General', function () {
    it('should exists', function () {
        expect(Person).toEqual(jasmine.any(Function));
    });

    it('should be creatable', function () {
        expect(function () {
            return new Person();
        }).not.toThrow();
    });

    it('should have "say" method', function () {
        expect(new Person().say).toEqual(jasmine.any(Function));
    });

    it('should publish message when Person say', function (cb) {
        var p1 = new Person();

        p1.speech.subscribe('say', function (data) {
            expect(data).toEqual('hello');
            cb();
        });

        p1.say('hello');
    });
});
