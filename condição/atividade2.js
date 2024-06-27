const prompt = require("prompt-sync")();

const usuarioFixo = "Erik";
const senhaFixa = 1234;

let usuario = prompt("digite seu usuario: ");

if (usuario != usuarioFixo) {
  console.log("usuário incorreto");
}
let senha = prompt("Digite sua senha: ");
if (senha != senhaFixa) {
  console.log("Acesso negado");
} else console.log("Acesso liberado");
