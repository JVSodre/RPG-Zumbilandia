export class Util {
    static randomizar(inicio: number, fim: number) {
        return inicio + Math.floor(Math.random() * (fim - inicio + 1));
    }
}