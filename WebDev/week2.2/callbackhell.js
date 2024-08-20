// write a code that
// logs hi after 1 second
// logs hellor 3 seconds after step1

// logs hello there 5 seconds after step 2

setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
