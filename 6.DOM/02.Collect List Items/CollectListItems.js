function extractText() {
  // TODO
  let itemNodes = document.querySelectorAll("ul li"); // -||- let itemNodes = document.querySelectorAll("ul#items li");
  let textResult = document.querySelector("#result"); // -||- let textResult = document.querySelector('textarea');

  /* for(let result of itemNodes){
        textResult.value += result.textContent + "\n"
    } */
  // ALSO-=-=-=
  itemNodes.forEach((result) => {
    textResult.value += result.textContent + "\n";
  });
}

// -=-=-=-=-=-Clear the Input field -=-=-=-=-=-
function clearText() {
  let textResult = document.querySelector("#result");

  textResult.value = "";
}

/* 

let listText = document.querySelectorAll("ul li");
let result = document.querySelector("textarea")
*/
