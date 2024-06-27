const prompt = require("prompt-sync")();

let valor = Number(prompt("Digite sua nota: ").trim());

switch (true) {
  case valor >= 7 && valor <= 10:
    console.log("Aprovado");
    break;
  case valor >= 4 && valor <= 6:
    console.log("Recuperação");
    break;
  case valor >= 0 && valor <= 3:
    console.log("Reprovado");
    break;
  default:
    console.log("Não é uma nota");
}
