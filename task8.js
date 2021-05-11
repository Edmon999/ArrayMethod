// Given an array, return a new array that only includes the numbers.
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
const onlyNum = (arr) => {
  return arr.filter((el) => {
    if (!isNaN(el) && typeof el === "number") {
      return el;
    }
  });
};
