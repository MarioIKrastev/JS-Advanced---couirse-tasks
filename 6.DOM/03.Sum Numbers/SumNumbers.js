function calc() {
  // TODO: sum = num1 + num2

  let firstNumber = document.getElementById("num1").value;
  let secondNumber = document.getElementById("num2").value;

  let result = +firstNumber + +secondNumber;

  document.getElementById("sum").value = result;
  console.log("hey");
}
function clearInput() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("sum").value = "";
}
