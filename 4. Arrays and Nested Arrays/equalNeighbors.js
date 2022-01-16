function equalNeighbors(input) {

  const result = input.reduce((acc, arrLine, arrLineItem) => {
    const counter = arrLine.reduce((acc, lineItem, arrLineIndex) => {
      if (lineItem === arrLine[arrLineIndex + 1]) {
        acc += 1;
      }
      if (lineItem === (input[arrLineItem + 1] || [])[arrLineIndex]) {
        acc += 1;
      }
      return acc;
    }, 0);
    return acc + counter;
  }, 0);
  return result;
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
console.log("------------------");
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
