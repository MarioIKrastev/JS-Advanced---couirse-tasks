function days(num1, num2, num3){
  
  let dayInput = `${num1}-${num2}-${num3}`;
  let day = new Date(dayInput);
  
  day.setDate(day.getDate() - 1);
  // return `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`
  console.log(`${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`);
