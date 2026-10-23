import { Personagem } from "./Personagem.ts";
import {Util} from "./Util.ts";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(nome+"Warrior")
        this.forca = Util.randomizar(1, 1000);
        this.habilidadeMental = 0;
        this.poderAtaque = this.forca * 10;
        this.esquiva = Util.randomizar(0, 50);
        this.resistencia = Util.randomizar(0, 90);
        this.vidaMaxima = Util.randomizar(1, 40000);
        this.vidaAtual = this.vidaMaxima;
    }

    atacar(personagem: Personagem): void {
        const chanceFalhar = Util.randomizar(1, personagem.esquiva)
        const reduzDano = ((personagem.resistencia)*0.1)
        if (chanceFalhar == personagem.esquiva) {
            console.log("O ataque Falhou")
        } else {
            personagem.vidaAtual -= this.poderAtaque * reduzDano
            personagem.atacar
        }
    }

    contraAtacar(personagem: Personagem): void {
        const chanceFalhar = Util.randomizar(1, personagem.esquiva)
        const reduzDano = ((personagem.resistencia)*0.1)
        if (chanceFalhar == personagem.esquiva) {
            console.log("O ataque Falhou")
        } else {
            personagem.vidaAtual -= this.poderAtaque * reduzDano
            personagem.atacar
        }
    }

    aprimorarHabilidade(): void {
        this.forca = this.forca*1.1
    }

    regenerarVida(): void {
        this.vidaAtual += (this.vidaMaxima*0.05)
    }
}