function biggerHalf(input) {
  input.sort((a, b) => {
    return b - a;
  });
  const result = [];
  for (let i = 0; i < input.length / 2; i++) {
    result.push(input[i]);
  }
//   console.log(result.reverse());
return result.reverse()
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
