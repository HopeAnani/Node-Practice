var http = require('http');
var events = require('events');


http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello world!');
    res.end();
}).listen(8080);

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
