const myReduce = (arr, cb, initialValue) => {
  let acc = typeof initialValue === "undefined" ? array[0] : initialValue;
  const startingIndex = typeof initialValue === "undefined" ? 1 : 0;
  for (let i = startingIndex; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
};
