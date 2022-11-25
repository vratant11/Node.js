const EvenEmitter = require("events");
const EventEmitter = require("stream");
const event = new EventEmitter();
event.emit("sayMyName");
event.on("sayMyName", () => {
  console.log("My name is vratant Singh");
});
