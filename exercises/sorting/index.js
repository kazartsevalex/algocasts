// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - 1 - i); j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j + 1, j);
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) indexOfMin = j;
    }

    if (indexOfMin !== i) swap(arr, indexOfMin, i);
  }

  return arr;
}

function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    let tmp = left[0] < right[0] ? left.shift() : right.shift();
    results.push(tmp);
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
