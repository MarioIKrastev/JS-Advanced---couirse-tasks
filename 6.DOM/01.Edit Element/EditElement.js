function editElement(referal, match, replacer) {
  const input = referal.textContent;
  const matcher = new RegExp(match, "g");
  const edited = input.replace(matcher, replacer);
  referal.textContent = edited;
}

/* 
-=-=-=-=-=-Second-=-=-=-=-=-
  const matcher = new RegExp(match, "g");
referal.textContent = element.textContent.replace(matcher, replacer)
*/
/* 
-=-=-=-=-=-Third-=-=-=-=-=-
while(referal.textContect.includes(match)){
referal.textContent = element.textContent.replace(match, replacer)
};
*/
