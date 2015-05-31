'use strict';

jest.dontMock('../app/scripts/Person');

var Person = require('../app/scripts/Person');

describe('General', function () {
    it('should exists', function () {
        expect(true).toEqual(true);
    });
});
