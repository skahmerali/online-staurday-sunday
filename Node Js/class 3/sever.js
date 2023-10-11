// // class 3 Events

// // Import events module
// var events = require('events');

// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();

// // Create an event handler as follows
// var connectHandler = function connected() {
//    console.log('connection succesful.');

//    // Fire the data_received event 
//    eventEmitter.emit('data_received');
// }

// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);

// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//    console.log('data received succesfully.');
// });

// // Fire the connection event 
// eventEmitter.emit('connection');

// console.log("Program Ended.");


var http = require("http")
var express = require("express");
var app = express();
const PORT = 5000
app.post('/home', (req, res)=>{
    res.send("hello world ")
})
app.listen(PORT , ()=>{
    console.log("server is running")
})