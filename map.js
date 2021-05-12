const myMap = (arr, cb) => {
  let anotherArr = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    anotherArr.push(cb(elem, i, arr));
  }
  return anotherArr;
};
