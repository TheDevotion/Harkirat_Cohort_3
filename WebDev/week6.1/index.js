const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "randomdipakjadhav";

const app = express();
app.use(express.json());

const users = [];

const generateToken = () => {
    console.log(Math.random());
    return Math.random();
};

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password,
    });

    res.json({
        message: "You are signed in",
    });
});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => {
        if (u.username == username) {
            return true;
        } else {
            return false;
        }
    });

    if (user) {
        const token = jwt.sign(
            {
                username: username,
            },
            JWT_SECRET
        );

        res.json({
            token: token,
        });
    } else {
        res.status(403).send({
            message: "Unauthorized",
        });
    }

    console.log(users);
});

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET); // gives json object {uname : ....}

    const username = decodedInfo.username;

    const user = users.find((u) => {
        if (u.username == username) {
            return true;
        } else {
            return false;
        }
    });

    if (user) {
        res.json({
            username: user.username,
            password: user.password,
        });
    } else {
        res.send({
            message: "token invalid",
        });
    }
});

app.listen(3000);
