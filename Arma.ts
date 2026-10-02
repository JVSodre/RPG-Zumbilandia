export class Arma {
    private _nome: string;
    private _dano: number;
    private _durabilidadeMaxima: number;
    private _durabilidade: number;

    constructor(nome: string, dano: number, durabilidade: number) {
        this._nome = nome;
        this._dano = dano;
        this._durabilidadeMaxima = durabilidade;
        this._durabilidade = durabilidade;
    }

    public get nome(): string {
        return this._nome;
    }
    public get durabilidade(): number {
        return this._durabilidade;
    }

    public ataque(): void {
        if (this._durabilidade <= 0) {
            throw new Error("A arma quebrou")
        }
        this._durabilidade -= 1
    }

    public restaura(): void {
        this._durabilidade = this._durabilidadeMaxima;
    }
}