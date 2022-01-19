function sortingNum(input) {
  const shadow = input.slice().sort((a, b) => {
    return a - b;
  });
  const result = [];
  for (let i = 0; i < input.length; i++) {
    i % 2 == 0 ? result.push(shadow.shift()) : result.push(shadow.pop());
  }
//   console.log(result);
return result

}
sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
