const prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade");

if (idade >= 18) {
  console.log("Apto a dirigir");
} else console.log("Não possui idade suficiente para dirigir");
