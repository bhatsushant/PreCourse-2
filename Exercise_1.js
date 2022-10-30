function BinarySearch(arr, l, r, x) {
  if (!Array.isArray(arr)) {
    return -1;
  }
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (x === arr[mid]) {
      return mid;
    } else if (x < arr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

let arr = [2, 3, 4, 10, 40];
x = 10;
let result = BinarySearch(arr, 0, arr.length - 1, x);

if (result !== -1) {
  console.log(`Element is present at index ${result}`);
} else {
  console.log('Element is not present in array');
}
