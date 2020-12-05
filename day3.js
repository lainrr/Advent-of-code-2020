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

  for (i = 1; i < arr.length; i++) {
    x = x + 3;

    if (x > 30) {
      over = x - 30;
      x = over - 1;
    }

    let yPosition = arr[i];
    let position = yPosition[x];

    if (position === ".") {
      clearPath++;
    } else {
      trees++;
    }
  }
  return trees;
}

console.log(part1(day3Input));
