// Assignment. create an auth middleware
// which verifies if the user is logged in and ends the request early if the user isnt logged in ?

////////////////////////////////////////////////////////////////////

const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "JustDipak";

const app = new express();
app.use(express.json());

let users = [];

app.post("/signup", (req, res) => {
    username = req.body.username;
    password = req.body.password;

    users.push({ username, password });

    res.json({
        message: "Successfully signed up !",
    });
});

app.post("/signin", (req, res) => {
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
app.get("/me", authMiddlware, (req, res) => {
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
