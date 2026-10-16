import { describe, expect, it, jest, } from "@jest/globals";
import { Combate } from "./Combate.ts";
import { Zumbi } from "./Zumbi.ts";
import { ZumbiCritico } from "./ZumbiCritico.ts";
import { Personagem } from "./Personagem.ts";

describe("Quando atacar", () => {
    it("A vida do jogador e do zumbi devem diminuir", () => {
        let personagem: Personagem = new Personagem("teste")
        let zumbiCritico: ZumbiCritico = new ZumbiCritico

        personagem.vidaAtual = 50
        zumbiCritico.vida = 50

        Combate.turnoAtaque(personagem, zumbiCritico)

        expect(personagem.vidaAtual).toBeLessThan(50)
        expect(zumbiCritico.vida).toBeLessThan(50)
    })
})

describe("Quando passar", () => {
    it("A vida do jogador deve diminuir e a do zumbi se manter", () => {
        let personagem: Personagem = new Personagem("teste")
        let zumbiCritico: ZumbiCritico = new ZumbiCritico

        personagem.vidaAtual = 50
        zumbiCritico.vida = 50

        Combate.turnoNormal(personagem, zumbiCritico)

        expect(personagem.vidaAtual).toBeLessThan(50)
        expect(zumbiCritico.vida).toBe(50)
    })
})