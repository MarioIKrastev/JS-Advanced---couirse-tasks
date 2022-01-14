function fruitShop(str, kg, price) {
  console.log(`I need $${((kg / 1000) * price).toFixed(2)} to buy ${(kg / 1000).toFixed(2)} kilograms ${str}.`);
}
fruitShop("orange", 2500, 1.8);
