// create a promisified version of 1. fs.readFile, fs.WriteFile, cleanFile

const fs = require("fs");

function readFilePromisified(resolve) {
  fs.readFile("abc.txt", "utf-8", function (err, data) {
    resolve(data);
  });
}

const p = new Promise(readFilePromisified);

function read(content) {
  console.log(content);
}

p.then(read);
