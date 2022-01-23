function colorize() {
  let result = document.querySelectorAll("tr:nth-of-type(2n)");
  for (const x of result) {
    x.style.backgroundColor = "teal";
  }
}
/*result.forEach((x)=>{
x.style.backgroundColor = "teal";
})
