const express = require("express");

const app = express();

//method,, timestamp and url

function middleWare2(req, res, next) {
    console.log("Method is " + req.method);
    console.log(
        " url is " + req.protocol + "://" + req.get("host") + req.originalUrl
    );
    console.log("time " + new Date());

    next();
}

app.use(middleWare2);

app.get("/sum", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b,
    });
});

app.get("/multiply", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b,
    });
});

app.get("/divide", function (req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b,
    });
});

app.get("/subtract", function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b,
    });
});

app.listen(3000);
