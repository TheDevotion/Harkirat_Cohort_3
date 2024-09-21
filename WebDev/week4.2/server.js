const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("Here");
    res.render("index", { text123: " world" });
});

app.get("/users", (req, res) => {
    res.send("User List");
});

app.get("/users/new", (req, res) => {
    res.send("User New Form");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
