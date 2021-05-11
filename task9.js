//Write a function which remove users with language equals to 'ru'.
const filterUsers = (arr) => {
  return arr.filter((el) => el.lang !== "ru");
};
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
filterUsers(users);
