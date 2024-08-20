// do the callback hell problem using promise.

// hi (1), hello(3), hi there(5)

// promisified set Timeout:

function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromisified(1000).then(() => {
  console.log("hi");
  setTimeoutPromisified(3000).then(() => {
    console.log("hello");
    setTimeoutPromisified(5000).then(() => {
      console.log("hi there");
    });
  });
});
