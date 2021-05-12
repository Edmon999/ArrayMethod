const mySome = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    } else {
      cb(arr[i], i, arr);
    }
  }
  return false;
};
