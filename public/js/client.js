//General Setup

////////////////////
//Whiteboard-Logic//
////////////////////
var usedTool;


////////////////////////////
/////Functions/////////////
//////////////////////////

function selTool(toolNumber) {
  usedTool = toolNumber;
}

$(document).ready(function () {
  $('.ui.accordion').accordion();
  $('.ui.dropdown').dropdown();
});

$('#brush').click(function () {
  selTool(1);
});

$('#pencil').click(function(){
  selTool(2);
});

 // TODO: Re-Implementation of the Server-Client Communication
 /*
 
    //Pages
    var $login = $('.login-page');
    var $chat = $('.chat-page');
   
   
    //Some basic variables
    var $window = $(window);
    var $usernameInput = $('#usernameInput');
    var $messages = $('#messages');
    var $inputBox = $('#m');
    var $loginbutton = $('#login');
 
    //Client Information
    var username;
    var connected = false;
    var typing = false;
    var lastTypingTime;
    var $currentInput = $usernameInput.focus();
    var socket = io();



    function cleanInput(input) {
    	return $('<div/>').text(input).text();
    }

    function setUsername() {
    	username = cleanInput($usernameInput.val().trim());
    	//Check username validitiy
    	if(username) {
    		$login.fadeOut();
    		$chat.show();
    		$login.off('click');
    		$currentInput = $inputBox.focus();
    		socket.emit('new user', username);
    		connected = true;
    		logMessage('Welcome, make yourself comfortable, ' + username + '.');
    	}
    }

    function sendMessage() {
    	var message = $inputBox.val();
    	message = cleanInput(message);
    	if(message && connected) {
    		$inputBox.val('');
    		socket.emit('chat message', { message: message, username: username });
    		$messages.append(
    			$('<li></li>').append(
    				$('<b>').text(username + ': ' + message))
    		);
    	}
    }

    function logMessage(message) {
    	$messages.append(
    		$('<li></li>').append(

    			$('<i>').text(message))
    	);
    }
    socket.on('chat message', function(data) {
    	$messages.append(
    		$('<li></li>').append(
    			$('<b>').text(data.username + ': ' + data.message))
    	);
    });
    socket.on('new user', function(data) {
    	logMessage('Look out! ' + data + ' has joined the fray.');
    });
    socket.on('user left', function(data) {
    	logMessage(data + ' has left the fray.');
    });

    socket.on("draw", function(params) {
    	ctx.fillRect(params);
    });

    $(document).ready(function() {

    	$loginbutton.click(function() {
    		setUsername();
    	});
    	$window.keydown(function(event) {
    		if(event.which === 13) {
    			if(username) {
    				sendMessage();
    			}
    		}
    	});
    });
*/