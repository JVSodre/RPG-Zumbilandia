import { Personagem } from "./Personagem.ts";
import { Util } from "../Util.ts";
import { Guerreiro } from "./Guerreiro.ts";

const randomizaGuerreiros = Util.randomizar(0, 4)
let lutador1 = new Guerreiro("Gladimir")
let lutador2 = new Guerreiro("Rodinei")
let lutador3 = new Guerreiro("Rogerin do Borogodó")

let n_guerreiros = randomizaGuerreiros
let lutadores: Personagem[] = [lutador1, lutador2, lutador3]

let guerreiros = []
for(let i = 0; i += 1; i < n_guerreiros) {
    guerreiros.push(lutadores[i])
}
let batalha1 = 0
let batalha2 = 0

 

do {
    batalha1 = Util.randomizar(0, n_guerreiros)
    batalha2 = Util.randomizar(0, n_guerreiros)
    console.log(`===== Guerreiros Vivos ${guerreiros.length} =====`)
    if (batalha1 == batalha2) {
        console.log("Um guerreiro não pode se auto atacar")
    } else {
       let guerreiro1 = guerreiros[batalha1]
       let guerreiro2 = guerreiros[batalha2]
       
    }

} while(n_guerreiros > 1) 
