import { describe, expect, it, jest, } from "@jest/globals";
import { ZumbiCritico } from "./ZumbiCritico.ts";
import { Util } from "./Util.ts";


describe("Quando usar habilidade", () => {
    it("Deve retornar o dobro do dano do zumbi", () => {
        const zumbiCritico = new ZumbiCritico();

        zumbiCritico.dano = 10;

        jest.spyOn(Util, "randomizar").mockReturnValue(10);

        const danoCritico = zumbiCritico.habilidade();

        expect(danoCritico).toBe(20);

        jest.restoreAllMocks();
    });
});

describe("Quando resetar o dano", () => {
    it("Deve retornar ao dano original do zumbi", () => {
        const zumbiCritico: ZumbiCritico = new ZumbiCritico();

        zumbiCritico.dano = 10;

        const danoCritico = zumbiCritico.habilidade();
        zumbiCritico.resetaDano();

        expect(zumbiCritico.dano).toBe(10);
    });
});

describe("Quando resetar a vida", () => {
    it("Deve retornar à vida original do zumbi", () => {
        const zumbiCritico: ZumbiCritico = new ZumbiCritico();

        zumbiCritico.vida = 0;

        zumbiCritico.resetaVida();

        expect(zumbiCritico.vida).toBeGreaterThan(0);
    });
});