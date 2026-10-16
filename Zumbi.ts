export class Zumbi {
    private _nome: string;
    private _nivel: number;
    private _vida: number;
    private _dano: number;
    constructor(nome: string, nivel: number, vida: number, dano: number) {
        this._nome = nome;
        this._nivel = nivel;
        this._vida = vida;
        this._dano = dano;
    }
    public get vida(): number {
        return this._vida;
    }
    public get dano(): number {
        return this._dano;
    }
    public set vida(vida: number) {
        this._vida = vida;
    }
    public set dano(dano: number) {
        this._dano = dano;
    }

    public habilidade(): number{
        return 1; // ele nunca vai funcionar, porque é sobreescrito pela habilidade do zumbi variante
    }
    public resetaDano(): void{
    }
    public resetaVida(): void{
    }
} 
