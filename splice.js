const mySplice = (arr, startIndex, deleteCount, ...newElem) => {
  let beforeStartIndex = [];
  let afterStartIndex = [];
  let removeElements = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < startIndex) {
      beforeStartIndex.push(arr[i]);
    } else if (i >= startIndex && count !== deleteCount) {
      removeElements.push(arr[i]);
      count++;
    } else {
      afterStartIndex.push(arr[i]);
    }
  }
  arr.length = 0;
  arr = arr.concat(beforeStartIndex, ...newElem, afterStartIndex);
  console.log(removeElements, arr);
};
mySplice([4, 8, 9, 0, 5], 2, 2, 5, 6);
