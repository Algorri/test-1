var express = require('express');
var app = express();
app.get('/', function(request, response) {
	response.send('Hello world');
});
app.listen(8080, function() {
	console.log('Listening on port 3000');
});
