const myEvery = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      cb(arr[i], i, arr);
    } else {
      return false;
    }
  }
  return true;
};
