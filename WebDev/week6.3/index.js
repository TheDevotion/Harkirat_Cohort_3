const jwt = require("jsonwebtoken");

// decode, verify, generate.

const value = {
    name: "Dipak",
    acNumber: "12345678",
};

const token = jwt.sign(value, "secret");

console.log(token);
