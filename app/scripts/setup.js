'use strict';

var Person = require('./person');

// Create one instance of `Person`.
var john = new Person('John');

// Subscribe for saying something.
john.speech.subscribe({
    topic: 'say',
    callback: function (data, envelope) {
        console.log('data', data);
        console.info('envelope', envelope);
    }
});

// Say something!
john.say('Na na na!');
