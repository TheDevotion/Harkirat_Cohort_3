function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// setTimeoutPromisified(1000).then(() => {
//   console.log("hi");
//   return setTimeoutPromisified(3000).then(() => {
//     console.log("hello");
//     return setTimeoutPromisified(5000).then(() => {
//       console.log("hi there");
//     });
//   });
// });

setTimeoutPromisified(1000)
  .then(() => {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(() => {
    console.log("hi there");
  });

console.log("outside callback hell.");
