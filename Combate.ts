import { Personagem } from "./Personagem.ts";
import { Zumbi } from "./Zumbi.ts";
import { Arma } from "./Arma.ts"

let maoCombate: Arma = new Arma("Mão", 5, 100); // cria a arma mão


export class Combate {

    private static ataquePersonagemEZumbi(personagem: Personagem, zumbi: Zumbi): void {
        personagem.arma.ataque(); // puxa a função ataque da arma que reduz sua durabilidade
        zumbi.vida -= personagem.arma.dano; // armazena o dano da arma em uma variável
        zumbi.habilidade(); // puxa a função habilidade do zumbi critico que pode aumentar o dano do inimigo
        personagem.vidaAtual -= zumbi.dano; // armazena o dano do inimigo em uma variável
        zumbi.resetaDano(); // reseta o dano do inimigo para o valor original
    }

    private static ataqueZumbi(personagem: Personagem, zumbi: Zumbi): void {
        zumbi.habilidade(); // puxa a função habilidade do zumbi critico que pode aumentar o dano do inimigo
        personagem.vidaAtual -= zumbi.dano; // armazena o dano do inimigo em uma variável
        zumbi.resetaDano(); // reseta o dano do inimigo para o valor original
    }

    private static verificaDurabilidadeArma(personagem: Personagem): void {
        if (personagem.arma.durabilidade <= 0) { // verifica se a arma tem 0 de durabilidade, se tiver ela quebra e o personagem volta a ter a mao como arma
            personagem.arma.restaura()
            personagem.trocaArma = maoCombate
        }
    }

    static turnoAtaque(personagem: Personagem, zumbi: Zumbi) {
        this.ataquePersonagemEZumbi(personagem, zumbi); // chama a função ataque que reduz a vida do inimigo e do personagem
        this.verificaDurabilidadeArma(personagem); // chama a função que verifica a durabilidade da arma do personagem
        
    }

    static turnoNormal(personagem: Personagem, zumbi: Zumbi) {
        this.ataqueZumbi(personagem, zumbi); // chama a função ataque que reduz a vida do inimigo e do personagem
    }
}