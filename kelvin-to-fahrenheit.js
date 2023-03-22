//Today the temp is 293 Kelvin degrees
var kelvin=203;
//Celsius is 273 degrees less than Kelvin, so we convert the temperature
//to Celcius scale by substracting 273 from Kelvin value
var celsius=(kelvin-273);
//Now we calculate Fahrenheit temperature using a formula
var fahrenheit=(celsius*(9/5)+32);
//converting decimal into rounded number using .floor method
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);