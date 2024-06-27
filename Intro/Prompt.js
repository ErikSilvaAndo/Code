const prompt = require("prompt-sync")();

const nome = prompt("Escreva seu nome: ");

const idade = Number(prompt("Digite sua idade: "));

const email = prompt("Digite seu email:");

console.log(nome, idade, email);
