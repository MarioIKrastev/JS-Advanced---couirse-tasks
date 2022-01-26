function addItem() {
  let ulItemsElements = document.getElementById("items");
  let newItemElement = document.getElementById("newItemText");
  let createLiElement = document.createElement("li");
  createLiElement.textContent = newItemElement.value;
  newItemElement.value = "";

  let createLinkElement = document.createElement("a");
  createLinkElement.href = "#";
  createLinkElement.textContent = "[Delete]";

  createLinkElement.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  ulItemsElements.appendChild(createLiElement);
  createLiElement.appendChild(createLinkElement);
}
