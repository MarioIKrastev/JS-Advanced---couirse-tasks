function circleArea(input) {
  typeof input === "number"
    ? console.log((Math.pow(input, 2) * Math.PI).toFixed(2))
    : console.log(
        `We can not calculate the circle area, because we receive a ${typeof input}.`
      );
}
circleArea(5);
circleArea("name");
