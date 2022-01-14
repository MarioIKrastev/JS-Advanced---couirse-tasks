function squareOfStarts(input) {
  let result = "";
  for (let i = 1; i <= input; i++) {
    result += "* ";
  }
  console.log(result);
  for (let k = 1; k < input; k++) {
    console.log(result.trimEnd());
  }
}
squareOfStarts(1);
console.log("--------------");
squareOfStarts(3);
console.log("--------------");

squareOfStarts(5);
console.log("--------------");

squareOfStarts(8);
