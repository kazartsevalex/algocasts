// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const res = [];

  cut(array, size);

  return res;

  function cut(arr, size) {
    if (arr.length <= size) {
      res.push(arr);
    } else {
      res.push(arr.splice(0, size));
      cut(arr, size);
    }
  }

  // const res = [];
  // let i = 0;
  //
  // while (i < array.length) {
  //   res.push(array.slice(i, i + size));
  //   i += size;
  // }
  //
  // return res;


  // const res = [];
  //
  // for (let el of array) {
  //   const last = res[res.length - 1];
  //
  //   if (!last || last.length === size) {
  //     res.push([el]);
  //   } else {
  //     last.push(el);
  //   }
  // }
  //
  // return res;
}

module.exports = chunk;
