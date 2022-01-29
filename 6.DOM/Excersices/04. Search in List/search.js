function search() {
  let listElements = document.getElementById("towns");
  let searchInputElement = document.getElementById("searchText");
  let resultElement = document.getElementById("result");

  let arrayWithTowns = Array.from(listElements.children);

  let matchCounter = 0;
  for (const item of arrayWithTowns) {
    if (item.textContent.includes(searchInputElement.value)) {
      item.style.fontWeight = "bold";
      item.style.textDecoration = "underline";
      matchCounter += 1;
    }
  }
  searchInputElement.value = "";
  resultElement.textContent = `${matchCounter} matches found`;
}
