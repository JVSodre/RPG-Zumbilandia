import { describe, expect, it, test } from "@jest/globals";
import { Arma } from "../src/models/Arma.ts";

describe("testando a durabilidade", () => {
    it("quando ataca a durabilidade deve cair", () => {
        let bastao: Arma = new Arma("Bastão", 10, 10)

        bastao.ataque()

        expect(bastao.durabilidadeAtual).toBeLessThan(10)
    })
})

describe("testando a quebra", () => {
    it("quando a durabilidade chegar a zero deve receber um erro", () => {
        let bastao: Arma = new Arma("Bastão", 10, 3)


        do {
            bastao.ataque()
        } while(bastao.durabilidadeAtual > 0)
        
            
        expect(() => bastao.ataque()).toThrow("A arma quebrou")
    })  
})
