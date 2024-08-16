// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

const users = [
  {
    uName: "Dipak",
    age: 22,
    sex: "male",
  },
  {
    uName: "Yash",
    age: 20,
    sex: "male",
  },
  {
    uname: "Sumit",
    age: 8,
    sex: "male",
  },
  {
    uname: "Sara",
    age: 20,
    sex: "female",
  },
];

const getAdultMales = (users) => {
  return users.age > 18 && users.sex === "male";
};

let ans = users.filter(getAdultMales);
console.log(ans);
