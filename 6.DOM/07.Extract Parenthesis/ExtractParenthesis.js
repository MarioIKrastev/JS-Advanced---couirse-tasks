function extract(content) {
  let extractedElements = document.getElementById(content);
  let regEx = /\(([^(]+)\)/g;
  let matches = extractedElements.textContent.matchAll(regEx);
  let result = [];
  for (const x of matches) {
    result.push(x[1]);
  }
  return result.join("; ");
}
