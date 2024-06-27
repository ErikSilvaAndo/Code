const outras = require("prompt-sync")();

const matematica = Number(outras("digite sua nota de matematica: "));

const lingua = Number(outras("digite sua nota de lingua portuguesa: "));

const biologia = Number(outras("digite sua nota de biologia:"));

console.log(matematica, lingua, biologia);

let medias = Number(matematica + lingua + biologia) / 3;

console.log(medias);
