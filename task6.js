// Write a function which returns array of usernames.
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
const getUserNames = (users) => {
  let arr = users.map((el) => el.username);
  return arr;
};
const getUserNameLengths = (users) => {
  let arrLengths = users.map((el) => el.username.length);
  return arrLengths;
};
