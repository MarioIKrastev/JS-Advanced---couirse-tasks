function magic(input) {
  const finalizedSumm = input[0].reduce((a, b) => a + b);
  const columnSum = [];
  
  let isTrue = true;
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let currentRowSum = input[i].reduce((a, b) => a + b);
    currentRowSum !== finalizedSumm ? result.push(false) : result.push(true);
  }
  input.forEach((el) => {
    el.forEach((num, index) => {
      if (columnSum[index]) {
        columnSum[index] += num;
      } else {
        columnSum[index] = num;
      }
    });
  });
  columnSum.forEach((i) => {
    i !== finalizedSumm ? result.push(false) : result.push(true);
  });
  !result.includes(false) ? isTrue : (isTrue = false);
  console.log(isTrue);
}
magic([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magic([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
