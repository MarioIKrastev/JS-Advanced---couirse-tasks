function days(num1, num2, num3) {
  let dayInput = `${num1}-${num2}-${num3}`;
  let day = new Date(dayInput);

  day.setDate(day.getDate() - 1);
  console.log(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`);
}
days(2016, 9, 30);
days(2016, 10, 1);
