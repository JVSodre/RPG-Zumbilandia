import { Zumbi } from "./Zumbi.ts";

export class ZumbiBolado extends Zumbi {
    private _escudo: number;
    constructor() {
        super("Zumbi Bolado", 1, 100, 15);
        this._escudo = 10;
    }
}
//tem que adicionar a habilidade dele