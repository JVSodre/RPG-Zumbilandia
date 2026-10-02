// classe --> campos / atributos --> metodos
import {Util} from "./Util.ts"
import {Arma} from "./Arma.ts"
let mao: Arma = new Arma("Mão", 5, 10)

export class Personagem { // classe (nome de classe primeiro caractere maiusculo)

    // atributos
    private _nome: string;
    private _nivel: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    private _arma: Arma;

    constructor( // construto, função que é executada quando a classe é instanciada
        nome: string, // parâmetros do construtor, valores que precisam ser passados quando a classe é instanciada
        //vida: number,
        //ataque: number,
      
    ) {
        this._nome = nome;
        this._nivel = 1;
        this._vidaMaxima = 100;
        this._vidaAtual = 100;
        this._arma = mao;
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
    public get nome(): string {
        return this._nome;
    }
    public get nivel(): number {
        return this._nivel;
    }
    public get vidaAtual(): number {
        return this._vidaAtual;
    }
    public get arma(): Arma {
        return this._arma;
    }
    public set trocaArma(arma: Arma) {
        this._arma = arma;
    }

    public curarPersonagem(): void{
        //this.vida += Util.randomizar(5, 10);
        if (this._vidaAtual < this._vidaMaxima) {
            this._vidaAtual += 5
            if (this._vidaAtual > this._vidaMaxima) {
                this._vidaAtual = this._vidaMaxima
            }
        } else {
            throw new Error("Vida máxima!")
        }
    }

    public uparPersonagem(): void{
        this._nivel += 1
        this._vidaMaxima += 75
        this._vidaAtual = this._vidaMaxima
        //this.ataque += 25
    }
}



