import { day1 } from "input.js";

function find(arr) {
  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < arr.length; x++) {
      for (y = 0; y < arr.length; y++) {
        if (arr[i] + arr[x] + arr[y] === 2020) {
          return arr[i] * arr[x] * arr[y];
        }
      }
    }
  }
}

console.log(find(day1));
