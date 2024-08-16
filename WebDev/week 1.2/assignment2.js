// Write a function that takes an array of users as inputs and returns only
// the users who are more than 18 years old

const users = [
  {
    uName: "Dipak",
    age: 22,
  },
  {
    uName: "Yash",
    age: 20,
  },
  {
    uname: "Sumit",
    age: 8,
  },
];

const getAdults = (users) => {
  let adults = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      adults.push(users[i]);
    }
  }
  return adults;
};

const ans = getAdults(users);

console.log(ans);
