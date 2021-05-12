const myFindIndex = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      return i;
    }
  }
  return -1;
};
