function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let containerItemsElement = document.querySelectorAll(
    ".container tbody tr td"
  );
  let inputElement = document.getElementById("searchField");

  function onClick() {
    for (const x of containerItemsElement) {
      if (
        x.textContent.includes(inputElement.value) &&
        inputElement.value != ""
      ) {
        const parentItemElement = x.closest("tr");
        const classListElement = parentItemElement.classList;
        classListElement.add("select");
      }
    }
    inputElement.value = "";
    document
      .getElementById("searchField")
      .addEventListener("click", onClickInput);
    function onClickInput() {
      let tableRowElement = document.querySelectorAll(".container tbody tr");

      for (const m of tableRowElement) {
        if (m.classList.contains("select")) {
          m.classList.remove("select");
        }
      }
    }
  }
}
