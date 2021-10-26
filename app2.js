var express = require("express")
var app = express() //서버 객체를 만든다 
var ejs = require("ejs");
var fs = require("fs");

app.get("/", function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Index</h1>');
})

app.get("/test1", function (req, res) {
    fs.readFile("./views/index.html", "utf8", (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(ejs.render(data));
    });
})

// app.use(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end('<h1>This is Express</h1>');
// });

app.listen(4000, function () {
    console.log("Server start 4000")
})