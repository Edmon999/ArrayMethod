//Given an array, return the sum of numbers that are 18 or over.
const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
arr.reduce((acc, el) => {
  if (el > 18) {
    return acc + el;
  }
  return acc;
}, 0);

//Write a function which calculates average age of users.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
const getAverageUser = (arr) => {
  let num = arr.reduce((acc, el) => {
    return acc + el.age;
  }, 0);
  return num / arr.length;
};
