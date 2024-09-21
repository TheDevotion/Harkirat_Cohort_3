const express = require("express");
const app = express();

//route handlers:
app.get("/hi", function (req, res) {
    res.send("Hello World");
});

app.get("/todo", function (req, res) {
    res.send("todo1");
});

app.listen(3000); // which port you want to listen on.

// infinite process.

// asg. todo using express.

// do it in memory ( array.)

// hard -> store data in file.

// todo.json.

// asg3 -> add user logic
// users 1, 2 , 3
