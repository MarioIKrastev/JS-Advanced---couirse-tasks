function biggestElement(input) {
  let result = [];
  input.forEach((el) => {
    return result.push(...el);
  });
  console.log(result.sort((a,b)=>b-a)[0]);
}
// biggestElement([
//   [20, 50, 10],
//   [8, 33, 145],
// ]);
