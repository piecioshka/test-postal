"use strict";

// Imports.
var postal = require("postal");

/**
 * Person constructor.
 * Imitation person from real world.
 * @constructor
 */
function Person() {
  this.speech = postal.channel("speech");
}

Person.prototype = {
  /**
   * Put passed message for speech channel.
   *
   * @param {string} message
   */
  say: function (message) {
    this.speech.publish("say", message);
  },
};

// Exports.
module.exports = Person;
