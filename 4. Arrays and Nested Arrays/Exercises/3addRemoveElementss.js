function addRemove(input) {
  const result = [];
  for (let i = 1; i <= input.length; i++) {
    input[i - 1] === "add" ? result.push(i) : result.pop();
  }
  result.length > 0 ? console.log(result.join('\n')) : console.log('Empty');
}

/*

addRemove(["add", "add", "add", "add"]);
console.log("--------------");
addRemove(['remove', 
'remove', 
'remove']
);
