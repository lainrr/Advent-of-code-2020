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

// Part 2
// A. Right 1, down 1.
// B. Right 3, down 1.
// C. Right 5, down 1.
// D. Right 7, down 1.
// E. Right 1, down 2.

// right = x
// down = i

// over for sample = 10
// over for day3input = 30

// for sample, should be
// 2 check
// 7 check
// 3 check
// 4 check
// 2 check

function part2(arr) {
  let trees = 0;
  let x = 0;
  let answer = 0;

  //A
  for (i = 1; i < arr.length; i++) {
    x = x + 1;

    if (x > 30) {
      over = x - 30;
      x = over - 1;
    }

    let yPosition = arr[i];
    let position = yPosition[x];

    if (position === "#") {
      trees++;
    }
  }
  answer = trees;
  trees = 0;
  x = 0;

  //B
  for (i = 1; i < arr.length; i++) {
    x = x + 3;

    if (x > 30) {
      over = x - 30;
      x = over - 1;
    }

    let yPosition = arr[i];
    let position = yPosition[x];

    if (position === "#") {
      trees++;
    }
  }
  answer = answer * trees;
  trees = 0;
  x = 0;

  //C
  for (i = 1; i < arr.length; i++) {
    x = x + 5;

    if (x > 30) {
      over = x - 30;
      x = over - 1;
    }

    let yPosition = arr[i];
    let position = yPosition[x];

    if (position === "#") {
      trees++;
    }
  }
  answer = answer * trees;
  trees = 0;
  x = 0;

  //D
  for (i = 1; i < arr.length; i++) {
    x = x + 7;

    if (x > 30) {
      over = x - 30;
      x = over - 1;
    }

    let yPosition = arr[i];
    let position = yPosition[x];

    if (position === "#") {
      trees++;
    }
  }
  answer = answer * trees;
  trees = 0;
  x = 0;

  //E
  for (i = 1; i < arr.length; i++) {
    i = i + 1;
    x = x + 1;

    if (x > 30) {
      over = x - 30;
      x = over - 1;
    }

    let yPosition = arr[i];
    let position = yPosition[x];

    if (position === "#") {
      trees++;
    }
  }
  answer = answer * trees;

  return answer;
}

console.log(part2(day3Input));
