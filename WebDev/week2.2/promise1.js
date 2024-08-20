function waitFor3s(resolve) {
  console.log("wait for 3 s running");
  setTimeout(resolve, 3000);
  console.log("wait for 3 s is done");
}

function main() {
  console.log("main is called");
}

waitFor3s(main);

console.log("starting global");
