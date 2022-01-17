function solve(input, num) {
  let arr = [];

  for (let i = 0; i < input.length; i += num) {
    arr.push(input[i]);
  }
  return arr;
}
solve(["5", "20", "31", "4", "20"], 2);
