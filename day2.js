let fs = require("fs");

const day2Input = fs
  .readFileSync("day2Input.txt")
  .toString()
  .split("\n")
  .map((s) => s.replace(/\r$/, ""))
  .filter((s) => s.length > 0);

function part1(arr) {
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    let current = arr[i];
    let min = current.split(" ")[0].split("-")[0];
    let max = current.split(" ")[0].split("-")[1];
    let letter = current.split(" ")[1][0];
    let pass = current.split(" ")[2];
    let x = pass.split(letter).length - 1; //find the number of instances of letter in pass
    if (x >= min && x <= max) {
      answer++; // if x is between or equal to the min and max, answer goes up by 1
    }
  }

  return answer;
}

function part2(arr) {
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    let current = arr[i];
    let index1 = parseInt(current.split(" ")[0].split("-")[0]) - 1;
    let index2 = parseInt(current.split(" ")[0].split("-")[1]) - 1;
    let letter = current.split(" ")[1][0];
    let pass = current.split(" ")[2];
    if (pass[index1] === letter && pass[index2] != letter) {
      answer++;
    } else if (pass[index1] != letter && pass[index2] === letter) {
      answer++;
    }
  }
  return answer;
}

console.log(part1(day2Input), part2(day2Input));
