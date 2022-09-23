import { Animal } from "./Animal";

class Felino extends Animal{
    public emitSound(sound: string): void {
        console.log(`felino emite ${sound}`);
        
    }


}export { Felino }