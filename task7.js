//Write a function which parses string integers. If it's not possible to
// parse, then add null
const parseInteger = (arr) => {
  let arr1 = [];
  arr.map((el) => {
    if (!Number.isNaN(parseInt(el))) {
      arr1.push(parseInt(el));
    } else {
      arr1.push(null);
    }
  });
  return arr1;
};
