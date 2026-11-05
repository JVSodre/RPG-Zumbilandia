import prompt from "prompt-sync";
import { Personagem } from "./Personagem.ts";
import { Util } from "./Util.ts";
import { Guerreiro } from "./Guerreiro.ts";
import { Padre } from "./Padre.ts";

const teclado = prompt();

// Sorteia a quantidade de personagens
let n_personagens = Util.randomizar(2, 4);

// Array de personagens
let personagens: Personagem[] = [];

// Cria os personagens aleatoriamente
for (let i = 0; i < n_personagens; i++) {

    let tipo = Util.randomizar(1, 2);

    if (tipo == 1) {
        personagens.push(new Guerreiro("Guerreiro " + (i + 1)));
    } else {
        personagens.push(new Padre("Padre " + (i + 1)));
    }

}

// Inicia as batalhas
while (personagens.length > 1) {

    console.log("\n================================");
    console.log(`PERSONAGENS VIVOS: ${personagens.length}`);
    console.log("================================");

    // Sorteia dois personagens
    let indice1 = Util.randomizar(0, personagens.length - 1);
    let indice2 = Util.randomizar(0, personagens.length - 1);

    // Impede que um personagem lute contra si mesmo
    while (indice1 == indice2) {
        indice2 = Util.randomizar(0, personagens.length - 1);
    }

    let personagem1: Personagem = personagens[indice1]!;
    let personagem2: Personagem = personagens[indice2]!;

    console.log(`\n${personagem1} VS ${personagem2}`);

    // Primeiro personagem ataca o segundo
    personagem1.atacar(personagem2);

    // Verifica se alguém morreu
    if (personagem1.vidaAtual <= 0) {
        personagens.splice(indice1, 1);
    }

    if (personagem2.vidaAtual <= 0) {
        personagens.splice(personagens.indexOf(personagem2), 1);
    }

    // Mostra os sobreviventes
    console.log("\n===== PERSONAGENS VIVOS =====");

    for (let personagem of personagens) {
        console.log(personagem.nome + " - Vida: " + personagem.vidaAtual.toFixed(2) + "/" + personagem.vidaMaxima.toFixed(2));
    }

    // Aguarda ENTER para próxima rodada
    if (personagens.length > 1) {
        teclado("Pressione ENTER para continuar...");
    }
}

// Mostra o vencedor
console.log("\n================================");
console.log("O VENCEDOR FOI:");
console.log(personagens[0]);
console.log("================================");
