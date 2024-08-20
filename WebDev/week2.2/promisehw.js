// set timeout promisified.

function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const callback = () => {
  console.log("1 second has passed");
};

setTimeoutPromisified(1000).then(callback);
