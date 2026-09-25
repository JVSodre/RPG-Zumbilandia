export class Arma {
    nome: string;
    dano: number;
    durabilidadeMaxima: number;
    durabilidade: number;

    constructor(nome: string, dano: number, durabilidade: number) {
        this.nome = nome;
        this.dano = dano;
        this.durabilidadeMaxima = durabilidade;
        this.durabilidade = durabilidade;
    }

    ataque(): void {
        if (this.durabilidade <= 0) {
            throw new Error("A arma quebrou")
        }
        this.durabilidade -= 1
    }

    restaura(): void {
        this.durabilidade = this.durabilidadeMaxima;
    }
}