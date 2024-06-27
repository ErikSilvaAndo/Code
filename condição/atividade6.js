const prompt = require("prompt-sync")();

let ano = prompt("Digite o ano: ");

if (ano % 4 == 0 && ano % 100 != 0) {
  console.log("É um ano bissexto");
} else if (ano % 400 == 0) {
  console.log("É um ano bissexto");
} else console.log("Não é um ano bissexto");
