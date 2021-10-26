var express = require("Express");
var router = express.Router();

router.get("/", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain charset=utf-8' });
    res.write("<h1>라우터 연습</h1>");
    res.end();
});

// 반드시 마지막에 객체를 내보내야 다른 파일에서 사용이 가능하다
module.exports = router;