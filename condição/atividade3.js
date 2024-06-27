const prompt = require("prompt-sync")();

let notaDeMat = Number(prompt("Digite sua senha de matématica: "));
let notaDeLp = Number(prompt("Digite sua nota de Língua portuguesa: "));
let notaDeBiologia = Number(prompt("Digite sua senha de biologia: "));

let media = (notaDeBiologia + notaDeLp + notaDeMat) / 3;

if (media < 4) {
  console.log("Reprovado");
} else if (media >= 4 && media <= 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado");
}
