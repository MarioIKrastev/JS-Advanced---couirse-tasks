function sumTable() {
  let priceElements = document.querySelectorAll(
    "tr:not(:last-child) td:nth-of-type(2)"
  );
  let result = 0;
  for (const x of priceElements) {
    let number = +x.textContent;
    result += number;
  }
  document.getElementById("sum").textContent = result;
}
