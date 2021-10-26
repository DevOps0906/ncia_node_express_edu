// npm i express
// npm i ejs

var express = require("express")
var app = express() //서버 객체를 만든다 
var ejs = require("ejs");
var fs = require("fs");
var path = require("path");

console.log(__dirname); // 변수나 함수 중에 __(밑줄 2개) 붙어있으면 내장변수나 내장함수
// 본인디렉토리 정보
console.log(path.join(__dirname, 'views'));

// app이라는 객체에 set 메서드를 통해서 환경설정 views는 html 문서 두는 곳을 지정한다
// 현재 작동중인 폴더 아래에 views를 둔다
app.set("views", path.join(__dirname, 'views'));
app.set("view.engine", "ejs");  // ejs엔진을 사용하겠다

// get-get방식으로 전송한것만 처리
// post - post방식으로 전송, user-get, post 둘다 처리
app.get("/", function (req, res) {
    res.render("index.ejs");
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