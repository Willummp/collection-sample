import { Felino } from "./Felino";
import { Leao } from "./Leao";

const felino = new Felino();
const simba = new Leao('Simba');

felino.emitSound('miiiiiiiiiaaau');
simba.emitSound('Roar');
simba.caca('Zebra', undefined, 'Mamífero')

const leoes: Leao[]=[]

const leao1 = new Leao('Scar');
const leao2 = new Leao('Mufasa');
const leao3 = new Leao('Kofu');

leoes.push(simba,leao1,leao2,leao3);

leoes.pop(); // TIRA O ULTIMO Q FOI COLOCADO AI (no caso vai tirar o leao3)

leoes.forEach((leao) => {
  console.log('\n',leao.name);
  
}); //

