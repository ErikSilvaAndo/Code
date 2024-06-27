const prompt = require("prompt-sync")();

let salario = Number(prompt("Digite seu salário: "));

let media = salario / 100;
if (salario <= 2112) {
  console.log("Isento");
} else if (salario >= 2112.01 && salario <= 2826.65) {
  console.log(media = salario * 7.5 / 100);
  console.log(" Voce pagou 7,5% de imposto");
} else if (salario >= 2826.66 && salario <= 3751.05) {
  console.log(media = salario * 15 /100);
  console.log("você pagou 15% de imposto");
} else if (salario >= 3751.06 && salario <= 4664.68) {
  console.log(media = salario * 22.5 / 100 );
  console.log("Você pagou 22,5% de imposto");
} else salario < 4664.68;
console.log(media = salario * 27.5 / 100);
console.log("Você pagou 27,5% de imposto");
