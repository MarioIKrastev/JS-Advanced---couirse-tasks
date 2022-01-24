function diagonalAttack(input) {
  let matrixWithArrays = [];
  //pushing arrays into array

  input.forEach((el) => {
    // let currentElement = el.split(" ");
    // matrixWithArrays.push(currentElement);

    matrixWithArrays.push(el.split(" ").map((n) => Number(n)));
  });
  //calculate diagonal from left

  const diagonalSummLeft = matrixWithArrays.reduce((acc, currV, currI) => {
    let currentItem = +currV[currI];
    return (acc += currentItem);
  }, 0);
  //calculate diagonal from right

  const diagonalSummRight = matrixWithArrays.reduce((acc, currV, currI) => {
    const currentLine = currV.reverse();
    return (acc += +currentLine[currI]);
  }, 0);
  //checking every index

  if (diagonalSummLeft === diagonalSummRight) {
    for (let i = 0; i < matrixWithArrays.length; i++) {
      for (let iI = 0; iI < matrixWithArrays.length; iI++) {
        i != iI && i != matrixWithArrays.length - 1 - iI
          ? (matrixWithArrays[i][iI] = diagonalSummLeft)
          : matrixWithArrays[i][iI];
      }
    }
    // print Line from an Array

    matrixWithArrays.forEach((el) => {
      console.log(el.reverse().join(" "));
    });
  }
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
