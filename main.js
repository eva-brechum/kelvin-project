//the weather forecast today is 293 kelvin
// var kelvin = 293;
// console.log(kelvin);
const kelvin = 293;

//convert Kelvin to Celsius by subtracting 273 from the kelvin variable
let celsius = kelvin - 273;
// console.log(celsius);

//convert to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// console.log(fahrenheit);

//using the .floor() method from built-in Math object to round down the temprature
fahrenheit= Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

