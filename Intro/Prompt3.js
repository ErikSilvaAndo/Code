const C = require("prompt-sync")();

const celcius = Number(C("digite a temperatura"));

const fahrenheit = Number(celcius * 1.8 + 32);
console.log(fahrenheit);
