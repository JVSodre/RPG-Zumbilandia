import { Zumbi } from "./Zumbi.ts";
import {Util} from "./Util.ts";

export class ZumbiCritico extends Zumbi {
    private _vidaMaxima: number;
    constructor() {
        super("Zumbi Crítico", 1, 100, 10);
        this._vidaMaxima = 100;
    }

    public habilidade(): void {
        const _critico = Util.randomizar(1, 10);
        if (_critico == 10) {
            this.dano = this.dano * 2;
        } else {
            this.dano = this.dano;
        }
    }
    public resetaDano(): void {
        this.dano = 10;
    }
    public resetaVida(): void {
        this.vida = this._vidaMaxima;
    }
}