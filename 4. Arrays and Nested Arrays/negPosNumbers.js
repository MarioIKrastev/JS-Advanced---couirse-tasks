function solve(input) {
  let result = [];
  input.forEach((el) => {
    el < 0 ? result.unshift(el) : result.push(el);
  });
  result.forEach((ell) => {
    console.log(ell);
  });
}
solve([7, -2, 8, 9]);
