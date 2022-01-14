function sameNumber(num) {
  num = num.toString().split("");
  let x = num.shift();
  let sum = 0;

  num.forEach((e) => {
    sum += Number(e);
  });
  if (!num.includes(x) & (x !== num[0])) {
    console.log("false");
  } else if (num.includes(x)) {
    console.log("true");
  }
  console.log(+sum + +x);
}
sameNumber(2222222);
sameNumber(1234);
