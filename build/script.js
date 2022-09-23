"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Felino_1 = require("./Felino");
var Leao_1 = require("./Leao");
var felino = new Felino_1.Felino();
var simba = new Leao_1.Leao('Simba');
felino.emitSound('miiiiiiiiiaaau');
simba.emitSound('Roar');
simba.caca('Zebra', undefined, 'Mamífero');
var leoes = [];
var leao1 = new Leao_1.Leao('Scar');
var leao2 = new Leao_1.Leao('Mufasa');
var leao3 = new Leao_1.Leao('Kofu');
leoes.push(simba, leao1, leao2, leao3);
leoes.pop(); // TIRA O ULTIMO Q FOI COLOCADO AI (no caso vai tirar o leao3)
leoes.forEach(function (leao) {
    console.log('\n', leao.name);
}); //
