const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "JustDipak";

const app = new express();
app.use(express.json());

let users = [];

const logger = (req, res, next) => {
    console.log(`${req.method} method came`);
    next();
};

// add this to avoid CORS
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, (req, res) => {
    username = req.body.username;
    password = req.body.password;

    users.push({ username, password });

    res.json({
        message: "Successfully signed up !",
    });
});

app.post("/signin", logger, (req, res) => {
    username = req.body.username;
    password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "incorrect credentials",
        });
        return;
    } else {
        const token = jwt.sign({ username }, JWT_SECRET);

        res.json({
            token: token,
        });
    }
});

const authMiddlware = (req, res, next) => {
    const token = req.headers.token;

    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        if (decodedData.username) {
            req.username = decodedData.username;
            next();
        } else {
            res.json({
                message: "You are not logged in!",
            });
        }
    } catch (e) {
        res.json({
            message: "wrong token!",
        });
    }
};
app.get("/me", logger, authMiddlware, (req, res) => {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === req.username) {
            foundUser = users[i];
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password,
    });
});

app.listen(3000);
