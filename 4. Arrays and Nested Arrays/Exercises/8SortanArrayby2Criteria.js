function solve(input) {
  input
    .sort((a, b) => {
      return a.length - b.length || a.localeCompare(b);
    })
    .forEach((element) => {
      console.log(element);
    });
}
solve(["test", "Deny", "omen", "Default"]);
console.log("--------");
solve(["alpha", "beta", "gamma"]);
