function great(x, y) {
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }
  //return x
  console.log(x);
}

great(15, 5);
great(2154, 458);
