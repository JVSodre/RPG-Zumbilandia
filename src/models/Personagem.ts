import {Util} from "../utils/Util.ts"
import {Arma} from "./Arma.ts"

let maoPadrao: Arma = new Arma("Mão", 5, 100);


export class Personagem { // classe (nome de classe primeiro caractere maiusculo)

    // atributos
    private _nome: string;
    private _nivel: number;
    private _vidaMaxima: number;
    private _vidaAtual: number;
    private _arma: Arma;
    private _xp: number;
    protected _curas: number;
    private _reparos: number;
    private _comida: number;

    constructor( // construto, função que é executada quando a classe é instanciada
        nome: string, // parâmetros do construtor, valores que precisam ser passados quando a classe é instanciada
    ) {
        this._nome = nome;
        this._nivel = 1;
        this._vidaMaxima = 100;
        this._vidaAtual = 100;
        this._arma = maoPadrao;
        this._xp = 0;
        this._curas = 3;
        this._reparos = 3;
        this._comida = 3;
    }


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
    public get comida(): number{
        return this._comida
    }
    public get curas(): number{
        return this._curas
    }
    public get reparos(): number{
        return this._reparos
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
        if (this._vidaAtual < this._vidaMaxima && this._curas > 0) {
            this._vidaAtual += 15
            this._curas -= 1
            if (this._vidaAtual > this._vidaMaxima) {
                this._vidaAtual = this._vidaMaxima
            }
        } else {
            throw new Error("Vida máxima!")
        }
    }

    public uparPersonagem(xpGanho: number): void{
        this._xp += xpGanho;
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

    public concertaArma(): void {
        if (this._reparos <= 0) {
            throw new Error("Você não tem itens de reparo");
        } else if(this._arma.durabilidadeAtual == this.arma.durabilidadeMaxima) {
            throw new Error("A arma não precisa de reparos");
        } else {
            this.arma.restaura();
            this._reparos -= 1;
        }
    }

    public reduzComida(): void {
        this._comida -=1
    }

    public atualizaCuras(numero: number): void{
        this._curas += numero
    } 

    public atualizaReparos(numero: number): void{
        this._reparos += numero
    } 

    public atualizaComidas(numero: number): void{
        this._comida += numero
    } 
}



