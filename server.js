var express = require('express'),
    app = express(),
    port = 1337;

app.use('/', express.static(__dirname + '/webapp'));

app.listen(port);
console.log('Server is running on ' + port);