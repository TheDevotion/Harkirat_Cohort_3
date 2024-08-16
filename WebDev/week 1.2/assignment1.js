// Write a function that takes an array of numbers as input,
//  and returns a new array with only even values.

arrOfNum = [1, 2, 3, 4, 5, 6];

const getEven = (num) => {
  return num % 2 == 0;
};

let ans = arrOfNum.filter(getEven);

console.log(ans);
