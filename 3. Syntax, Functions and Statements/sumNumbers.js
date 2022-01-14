function sumNumbers(num1, num2) {
  num1 = +num1;
  num2 = +num2;
  let result = 0;
  for (let index = num1; index <= num2; index++) {
    result += index;
  }
  console.log(result);
}
sumNumbers("1", "5");
