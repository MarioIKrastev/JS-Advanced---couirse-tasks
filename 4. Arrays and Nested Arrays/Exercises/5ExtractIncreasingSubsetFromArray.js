function solve(input) {
  let arr = [input[0]];
  for (let i = 0; i < input.length; i++) {
    const currentItem = input[i];
    currentItem >= input[i - 1] ? arr.push(currentItem) : currentItem;
  }
  return arr
}
