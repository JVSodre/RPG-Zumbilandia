import { Personagem } from "./Personagem.ts";
import { Zumbi } from "./Zumbi.ts";
import { Arma } from "./Arma.ts"

const maoCombate: Arma = new Arma("Mão", 5, 100); // cria a arma mão

//let mao: Arma = new Arma("Mão", 5, 100) 

export class Combate {
    static turnoAtaque(personagem: Personagem, zumbi: Zumbi) {
        personagem.arma.ataque(); // puxa a função ataque da arma que reduz sua durabilidade    
        zumbi.vida -= personagem.arma.dano; // reduz a vida do inimigo pelo dano da arma

        if (personagem.arma.durabilidade <= 0) { // verifica se a arma tem 0 de durabilidade, se tiver ela quebra e o personagem volta a ter a mao como arma
            personagem.arma.restaura()
            personagem.trocaArma = maoCombate
        }

        if (zumbi.vida > 0) {
            zumbi.dano = zumbi.habilidade(); // puxa a função habilidade do zumbi critico que pode aumentar o dano do inimigo
            personagem.vidaAtual -= zumbi.dano; // reduz a vida do personagem pelo dano do inimigo
            zumbi.resetaDano();
        }
        
    }

    
    static turnoNormal(personagem: Personagem, zumbi: Zumbi) {
        zumbi.dano = zumbi.habilidade(); // puxa a função habilidade do zumbi critico que pode aumentar o dano do inimigo
        personagem.vidaAtual -= zumbi.dano; // reduz a vida do personagem pelo dano do inimigo
        zumbi.resetaDano();
    }
}