var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000, function() {
    console.log('Annemarie Kocab is running at http://localhost:3000/');
});
