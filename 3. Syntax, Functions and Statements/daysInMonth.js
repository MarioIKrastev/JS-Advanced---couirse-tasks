function days(mont, year) {
  console.log(new Date(year, mont, 0).getDate());
}
days(1, 2012);
days(2, 2021);
