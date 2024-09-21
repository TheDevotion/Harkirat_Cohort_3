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

app.get("/me", (req, res) => {
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === decodedData.username) {
                foundUser = users[i];
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password,
        });
    } else {
        res.json({
            message: "You are not logged in!",
        });
    }
});

app.listen(3000);
