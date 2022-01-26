function solve() {
  let namingConventionElement = document.getElementById("naming-convention")
    .value;
  let textElement = document.getElementById("text").value;

  let resultElement = document.getElementById("result");

  if (namingConventionElement == "Camel Case") {
    textElement = textElement.toLowerCase().split(" ");

    let result = "";
    for (let i = 0; i < textElement.length; i++) {
      i == 0
        ? (result = textElement[i])
        : (result +=
            textElement[i].charAt(0).toUpperCase() + textElement[i].slice(1));
    }

    resultElement.textContent = result;
  } else if (namingConventionElement == "Pascal Case") {
    textElement = textElement.toLowerCase().split(" ");
    let result = "";
    for (const x of textElement) {
      result += x.charAt(0).toUpperCase() + x.slice(1);
    }
    resultElement.textContent = result;
  } else {
    resultElement.textContent = "Error!";
  }
}
