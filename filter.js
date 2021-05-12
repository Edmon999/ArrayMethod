const myFilter = (arr, cb) => {
  let filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      filterArr.push(arr[i]);
      cb(arr[i], i, arr);
    }
  }
  return filterArr;
};
