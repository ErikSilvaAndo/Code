const prompt = require("prompt-sync")();

let direcao = prompt(
  "digite se você quer ir para frente, para trás, para direita ou para esquerda: "
);

if (direcao == "esquerda") {
  console.log("Você está indo para a esquerda");
} else if (direcao == "direita") {
  console.log("Você está indo para a direita");
} else if (direcao == "trás") {
  console.log("Você está indo para trás");
} else {
  console.log("Você está indo para frente");
}
