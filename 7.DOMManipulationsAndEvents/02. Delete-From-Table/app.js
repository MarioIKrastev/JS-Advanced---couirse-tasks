function deleteByEmail() {
  let inputElement = document.querySelector('input[name="email"]');
  let tableCustomersElements = document.querySelectorAll(
    "tr td:nth-of-type(2)"
  );
  let matchElement = document.getElementById("result");

  let foundedElementResult = Array.from(tableCustomersElements).find(
    (el) => el.textContent === inputElement.value
  );

  if (foundedElementResult) {
    foundedElementResult.parentElement.remove();
    matchElement.textContent = "Deleted.";
  } else {
    matchElement.textContent = "Not Found.";
  }
}
/*

tableCustomersElements.forEach((el) => {
    if (inputElement.value === el.textContent) {
      el.parentElement.remove();
      matchElement.textContent = "Deleted.";
    } else {
      matchElement.textContent = "Not Found.";
    }
  });
*/
