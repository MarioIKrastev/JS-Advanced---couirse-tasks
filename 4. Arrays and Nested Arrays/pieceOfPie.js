function pieceOfPie(arr, start, end) {
  let indexOfStart = arr.indexOf(start);
  let indexOfEnd = arr.indexOf(end);
  let result = arr.slice(indexOfStart, indexOfEnd + 1);
  return result;
  //console.log(result);
}
