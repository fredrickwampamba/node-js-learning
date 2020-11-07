const events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on("connection",()=>{
	console.log("Connection made");
	eventEmitter.emit("data_received");
});
eventEmitter.on("data_received",()=>{
	console.log("data has been received");
});
eventEmitter.emit("connection");
