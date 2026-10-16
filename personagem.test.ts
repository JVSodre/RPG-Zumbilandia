import { describe, expect, it, test } from "@jest/globals";
import { Personagem } from "./Personagem.ts";

/*
describe("Quando treinarAtaque", () => {

    it("Deve randomizar pontos de ataque ganhos e randomizar pontos de vida perdidos no personagem", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir", "Paladino do Ti")
            gladimir.ataque = 1
            gladimir.vidaAtual = 100
        //Execução
            gladimir.treinarAtaque()
        //Validação
            expect(gladimir.ataque).toBeGreaterThan(1)
            expect(gladimir.vidaAtual).toBeLessThan(100)

    })
})
*/
describe("Quando curarPersonagem", () => {

    it("Deve randomizar pontos de vida ganhos no personagem", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir")
            gladimir.vidaAtual = 99
            gladimir.vidaMaxima = 100
        //Execução
            gladimir.curarPersonagem()
        //Validação
            expect(gladimir.vidaAtual).toBe(100)

    })
})

describe("Quando uparPersonagem", () => {

    it("Deve aumentar nivel, vida e ataque no personagem", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir")
            gladimir.nivel = 1
            gladimir.vidaAtual = 100
        //Execução
            gladimir.uparPersonagem(150)
        //Validação
            expect(gladimir.nivel).toBeGreaterThan(1)
            expect(gladimir.vidaAtual).toBeGreaterThan(100)

    })
})

/*
describe("Quando personagem morrer", () => {

    it("Deve lançar o erro Personagem Morreu!", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir")
            gladimir.ataque = 1
            gladimir.vidaAtual = 1
        //Execução Validação
            expect(() => gladimir.treinarAtaque()).toThrow("Personagem morreu!")

    })
})
*/
describe("Quando personagem curar além da vida máxima", () => {

    it("Deve lançar o erro Vida máxima!", () => {

        //cenário
            const gladimir: Personagem = new Personagem("Gladimir")
            gladimir.vidaAtual = 100
            gladimir.vidaMaxima = 100
        //Execução Validação
            expect(() => gladimir.curarPersonagem()).toThrow("Vida máxima!")

    })
})

describe("Quando resetar a vida do personagem", () => {

    it("Deve restaurar a vida do personagem para o valor máximo", () => {
        const gladimir: Personagem = new Personagem("Gladimir")
        gladimir.vidaAtual = 50
        gladimir.vidaMaxima = 100
        gladimir.restauraVida()
        expect(gladimir.vidaAtual).toBe(100)
    })
})







