const prompt = require("prompt-sync")();

let produto = Number(prompt("Coloque o codigo do produto: ").trim());

switch (true) {
  case produto == 101:
    console.log("Maçã R$3/Kg");
    break;
  case produto == 102:
    console.log("Melancia R$/5");
    break;
  case produto == 103:
    console.log("Morango R$2o/Kg");
    break;
  default:
    console.log("Não é um produto registrado");
}

