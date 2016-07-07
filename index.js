//Basic setup
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

//Fire up server
server.listen(port, function(){
    console.log('Welcome to wbChat Server !');
    console.log('Server: Listening on port %d', port);
});

//Set up routing
app.use(express.static(__dirname + '/public'));

/////////////////////////////////////////////////////////
/////////////////Server Configuration///////////////////
////////////////////////////////////////////////////////

