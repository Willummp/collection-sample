import { Felino } from "./Felino";
class Leao extends Felino {
    public name: string;

    constructor (name:string){
        super();
        this.name=name;
    }

    public emitSound(sound: string): void {
        console.log(`Leão emite ${sound}`);
    }
    public caca (presa:string): void;  //SOBRECARGA 
    public caca (presa: string, qtdPresas: number): void;
    public caca (presa: string, qtdPresas: number, tipoPresa: string): void;

    public caca (presa: string, qtdPresas?: number, tipoPresa?: string){
        if (tipoPresa != undefined){// pra saber se a informcao chegou    (!=  significa DIFERENÇA )
            console.log(`Leão está caçando um ${tipoPresa}`); // so vai aparecer  se o usuario escolher o tipo de presa 
        }
        const numPresas = (qtdPresas == undefined)? 1: qtdPresas;
        console.log(`O Leão está caçando ${numPresas} ${presa}`);
        
    }
} export { Leao }