function random(resolve) {}

let p = new Promise(random);
console.log(p);

function callback() {
  console.log("promise success");
}

p.then(callback);
