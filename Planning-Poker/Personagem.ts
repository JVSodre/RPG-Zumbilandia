import {Util} from "./Util.ts";

export class Personagem {
    protected _nome: string;
    protected _forca: number;
    protected _habilidadeMental: number;
    protected _poderAtaque: number;
    protected _esquiva: number;
    protected _resistencia: number;
    protected _vidaAtual: number;
    protected _vidaMaxima: number;

    constructor(nome: string) {
        this._nome = nome,
        this._forca =  0,
        this._habilidadeMental =  0,
        this._poderAtaque =  0,
        this._esquiva =  0,
        this._resistencia =  0,
        this._vidaAtual =  0,
        this._vidaMaxima =  0;
    }

    public set forca(numero: number) {
        this._forca = numero;
    }

    public set habilidadeMental(numero: number) {
        this._habilidadeMental = numero;
    }

    public set poderAtaque(numero: number) {
        this._poderAtaque = numero;
    }

    public set esquiva(numero: number) {
        this._esquiva = numero;
    }

    public set resistencia(numero: number) {
        this._resistencia = numero;
    }

    public set vidaAtual(numero: number) {
        this._vidaAtual = numero;
    }

    public set vidaMaxima(numero: number) {
        this._vidaMaxima = numero;
    }

    public get nome(): string {
        return this._nome;
    }

    public get vidaAtual(): number {
        return this._vidaAtual;
    }

    public get esquiva(): number {
        return this._esquiva;
    }

    public get resistencia(): number {
        return this._resistencia;
    }

    public get vidaMaxima(): number {
        return this._vidaMaxima;
    }

    public atacar(personagem: Personagem) {
        console.log("desconhecido")
    }

    public contraAtacar(personagem: Personagem) {
        console.log("desconhecido")
    }

    public aprimorarHabilidade() {
        console.log("desconhecido")
    }

    public regenerarVida() {
        console.log("desconhecido")
    }
}