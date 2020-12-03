const { clear } = require("console");
let fs = require("fs");

const day3Input = fs.readFileSync("day3Input.txt").toString().split("\n");

sample = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

function part1(arr) {
  let trees = 0;
  let clearPath = 0;
  let x = 0;

  for (i = 0; i < arr.length; i++) {
    let yPosition = arr[i];
    let position = yPosition[x];
    x = x + 3;
    if (x > 10) {
      //not working - when you reach the end of x, go back to the beginning + the number you exceeded it by
      //31 squares per line in day3Input, 11 for sample
      over = x - 10;
      let x = 0 + over;
      console.log(x, over);
    }
    if (position === ".") {
      clearPath++;
    } else {
      trees++;
    }
  }
  //console.log(trees + clearPath, arr.length); //1 tree or clearPath per item in array/ line
  return trees;
}

console.log(part1(sample));
