// sort
const sortBy = (arr, str) => {
  if (str === "Asc" || typeof str === "undefined") {
    return arr.sort((a, b) => a - b);
  } else if (str === "Desc") {
    return arr.sort((a, b) => b - a);
  }
};
