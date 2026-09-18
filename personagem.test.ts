import { describe, expect, it, test } from "@jest/globals";
import { Personagem } from "./Personagem.ts";

describe("Quando treinarAtaque", () => {

    it("Deve randomizar pontos de ataque ganhos e randomizar pontos de vida perdidos no personagem", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir", "Paladino do Ti")
            gladimir.ataque = 1
            gladimir.vida = 100
        //Execução
            gladimir.treinarAtaque()
        //Validação
            expect(gladimir.ataque).toBeGreaterThan(1)
            expect(gladimir.vida).toBeLessThan(100)

    })
})

describe("Quando curarPersonagem", () => {

    it("Deve randomizar pontos de vida ganhos no personagem", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir", "Paladino do Ti")
            gladimir.vida = 100
        //Execução
            gladimir.treinarAtaque()
            gladimir.curarPersonagem()
        //Validação
            expect(gladimir.vida).toBe(100)

    })
})

describe("Quando uparPersonagem", () => {

    it("Deve aumentar nivel, vida e ataque no personagem", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir", "Paladino do Ti")
            gladimir.nivel = 1
            gladimir.vida = 100
            gladimir.ataque = 50
        //Execução
            gladimir.uparPersonagem()
        //Validação
            expect(gladimir.nivel).toBeGreaterThan(1)
            expect(gladimir.vida).toBeGreaterThan(100)
            expect(gladimir.ataque).toBeGreaterThan(50)

    })
})

describe("Quando personagem morrer", () => {

    it("Deve lançar o erro Personagem Morreu!", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir", "Paladino do Ti")
            gladimir.ataque = 1
            gladimir.vida = 1
        //Execução Validação
            expect(() => gladimir.treinarAtaque()).toThrow("Personagem morreu!")

    })
})

describe("Quando personagem curar além da vida máxima", () => {

    it("Deve lançar o erro Vida máxima!", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir", "Paladino do Ti")
            gladimir.vida = 100
            gladimir.vidaMaxima = 100
        //Execução Validação
            expect(() => gladimir.curarPersonagem()).toThrow("Vida máxima!")

    })
})











