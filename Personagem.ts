// classe --> campos / atributos --> metodos
import {Util} from "./Util.ts"
import {Arma} from "./Arma.ts"

const maoPadrao: Arma = new Arma("Mão", 5, 100);

//let mao: Arma = new Arma("Mão", 5, 100)

export class Personagem { // classe (nome de classe primeiro caractere maiusculo)

    // atributos
    private _nome: string;
    private _nivel: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    private _arma: Arma;
    private _xp: number;

    constructor( // construto, função que é executada quando a classe é instanciada
        nome: string, // parâmetros do construtor, valores que precisam ser passados quando a classe é instanciada
        //vida: number,
        //ataque: number,
      
    ) {
        this._nome = nome;
        this._nivel = 1;
        this._vidaMaxima = 100;
        this._vidaAtual = 100;
        this._arma = maoPadrao;
        this._xp = 0;
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
    public get vidaMaxima(): number {
        return this._vidaMaxima;
    }
    public get arma(): Arma {
        return this._arma;
    }
    public get xp(): number {
        return this._xp;
    }


    public set vidaAtual(vida: number) {
        this._vidaAtual = vida;
    }
    public set vidaMaxima(vida: number) {
        this._vidaMaxima = vida;
    }
    public set nivel(nivel: number) {   
        this._nivel = nivel;
    }
    public set trocaArma(arma: Arma) {
        this._arma = arma;
    }

    public curarPersonagem(): void{
        //this.vida += Util.randomizar(5, 10);
        if (this._vidaAtual < this._vidaMaxima) {
            this._vidaAtual += 15
            if (this._vidaAtual > this._vidaMaxima) {
                this._vidaAtual = this._vidaMaxima
            }
        } else {
            throw new Error("Vida máxima!")
        }
    }

    public uparPersonagem(xpGanha: number): void{
        this._xp += xpGanha;
        const xpNecessaria = 100 * this._nivel;

        if (this._xp >= xpNecessaria) {
            this._xp -= xpNecessaria
            this._nivel += 1
            this._vidaMaxima += 25
            this._vidaAtual = this._vidaMaxima
        }
    }

    public restauraVida(): void {
        this._vidaAtual = this._vidaMaxima
    }
}



