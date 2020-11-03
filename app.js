var express = require("express");
var app = express();


app.use(express.static(__dirname + '/gald'));


app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.listen(3636);

console.log("http://127.0.0.1:3636/");