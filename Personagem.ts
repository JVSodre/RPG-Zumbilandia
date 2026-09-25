// classe --> campos / atributos --> metodos
import {Util} from "./Util.ts"
import {Arma} from "./Arma.ts"
let mao: Arma = new Arma("Mão", 5, 10)

export class Personagem { // classe (nome de classe primeiro caractere maiusculo)

    // atributos
    nome: string;
    nivel: number;
    vidaMaxima: number;
    vidaAtual: number;
    arma: Arma;

    constructor( // construto, função que é executada quando a classe é instanciada
        nome: string, // parâmetros do construtor, valores que precisam ser passados quando a classe é instanciada
        //vida: number,
        //ataque: number,
      
    ) {
        this.nome = nome; // retorna o valor do parâmetro para o atributo da classe
        this.nivel = 1;
        this.vidaMaxima = 100;
        this.vidaAtual = 100;
        this.arma = mao;
    }

    //métodos

/*    treinarAtaque(): void{
        
        this.ataque += Util.randomizar(5, 10);
        //this.vida -= Util.randomizar(5, 10);
        this.vidaAtual -= 5
        if(this.vidaAtual <= 0){
            throw new Error("Personagem morreu!")
        }
    }
*/

    curarPersonagem(): void{
        //this.vida += Util.randomizar(5, 10);
        if (this.vidaAtual < this.vidaMaxima) {
            this.vidaAtual += 5
            if (this.vidaAtual > this.vidaMaxima) {
                this.vidaAtual = this.vidaMaxima
            }
        } else {
            throw new Error("Vida máxima!")
        }
    }

    uparPersonagem(): void{
        this.nivel += 1
        this.vidaMaxima += 75
        this.vidaAtual = this.vidaMaxima
        //this.ataque += 25
    }
}



