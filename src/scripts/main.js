import "../index.html";

var Person = require("./person");

var john = new Person();

// Subscribe for saying something.
john.speech.subscribe("say", function (data, envelope) {
  console.log("John say..", data);
  console.info("envelope", envelope);
});

// Say something!
john.say("Na na na!");
