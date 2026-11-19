export abstract class Zumbi {
    private _nome: string;
    private _nivel: number;
    private _vida: number;
    private _dano: number;
    protected _xp: number;
    constructor(nome: string, nivel: number, vida: number, dano: number, xp: number) {
        this._nome = nome;
        this._nivel = nivel;
        this._vida = vida;
        this._dano = dano;
        this._xp = xp;
    }
    public get vida(): number {
        return this._vida;
    }
    public get dano(): number {
        return this._dano;
    }
    public get xp(): number {
        return this._xp;
    }
    public set vida(vida: number) {
        this._vida = vida;
    }
    public set dano(dano: number) {
        this._dano = dano;
    }

    public abstract habilidade(): void;

    public abstract resetaDano(): void;
    
    public abstract resetaVida(): void;
} 
