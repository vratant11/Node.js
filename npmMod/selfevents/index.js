const EvenEmittr = require("events");
const EventEmittr = require("stream");
const event = new EventEmittr();
event.emit("sayMyName");
event.on("sayMyName", () => {
  console.log("My name is Vratant Singh");
});
