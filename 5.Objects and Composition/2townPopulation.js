function townPopulation(input) {
  let obj = {};
  for (const x of input) {
    let [city, population] = x.split(" <-> ");
    !Object.keys(obj).includes(city)
      ? (obj[city] = +population)
      : (obj[city] += +population);
  }
  const result = Object.entries(obj);
  result.forEach((el) => {
    console.log(`${el[0]} : ${el[1]}`);
  });
}
townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
console.log("-------------------");
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
