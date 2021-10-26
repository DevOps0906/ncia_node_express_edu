var express = require("express")
var app = express() //서버 객체를 만든다 

app.use(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>This is Express</h1>');
});

app.listen(4000, function () {
    console.log("Server start 4000")
})