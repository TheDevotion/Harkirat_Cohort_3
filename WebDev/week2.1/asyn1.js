const fs = require("fs");

function print(err, data) {
  // error first callbacks
  console.log(data);
}

const contents = fs.readFile("a.txt", "utf-8", print);
const contents2 = fs.readFile("b.txt", "utf-8", print);

console.log("Done");
