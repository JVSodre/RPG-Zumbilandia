import { Personagem } from "./Personagem.ts";
import {Util} from "./Util.ts";

export class Padre extends Personagem {
    constructor(nome: string) {
        super(nome+"Priest") 
            this.forca = 0;
            this.habilidadeMental = 0;
            this.poderAtaque = 0;
            this.esquiva = 0;
            this.resistencia = 0;
            this.vidaMaxima = Util.randomizar(1, 8000);
            this.vidaAtual = this.vidaMaxima;
    }
     atacar(personagem: Personagem): void {
        const chance = Util.randomizar(1, 100);

        if (chance <= 40) {
            console.log(`${this.vidaMaxima > 0 ? "O padre" : "Padre"} converteu o oponente! A batalha encerra imediatamente.`);
            personagem.vidaAtual = 0; 
        } else {
            console.log("A tentativa de conversão falhou.");
            personagem.atacar(this)
        }
    }

    contraAtacar(personagem: Personagem): void {
        const chance = Util.randomizar(1, 100);

        if (chance <= 40) {
            console.log(`${this.vidaMaxima > 0 ? "O padre" : "Padre"} converteu o oponente no contra-ataque!`);
            personagem.vidaAtual = 0;
        } else {
            console.log("O contra-ataque falhou.");
            personagem.atacar(this)
        }
    }

     aprimorarHabilidade(): void {
        throw new Error("Este personagem não pode executar esta ação");
     }
    
     regenerarVida(): void {
        this.vidaAtual += this.vidaMaxima * 0.10;
     }
}