function diagonalSumm(input) {
  let arr = [];
  const leftD = input.reduce((acc, currValue, currIndex) => {
    return acc + currValue[currIndex];
  }, 0);
  const rightD = input.reduce((acc, currValue, currIndex) => {
    const currentValue = currValue.reverse();
    return acc + currentValue[currIndex];
  }, 0);
  arr.push(leftD);
  arr.push(rightD);
  //return arr.join(' ')
  console.log(arr.join(' '));
}
// diagonalSumm([
//   [20, 40],
//   [10, 60],
// ]);
// console.log("---------");
// diagonalSumm([
//   [3, 5, 17],
//   [-1, 7, 14],
//   [1, -8, 89],
// ]);
