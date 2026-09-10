import { Personagem } from "./Personagem.ts";
import prompt from "prompt-sync";

const teclado = prompt(); // variavel que permite a entrada de dados do usuario

let personagem: Personagem | null = null; // variável global para armazenar o personagem criado

console.clear(); // limpa a tela do console
console.log("===== Criando um novo personagem ====="); // mensagem informando que o processo de criação do personagem começou
console.log(); 
let nome = teclado("Digite o nome do seu personagem: "); // solicita o nome do personagem ao usuário
let classe = teclado("Qual a classe do seu personagem: "); // solicita a classe do personagem ao usuário

personagem = new Personagem( // cria um novo objeto Personagem com os valores fornecidos pelo usuário
    nome,
    classe,
); // armazena o novo personagem na variável global


let escolha = 0; // variável para armazenar a escolha do usuário no menu

while (escolha !== 9) { // loop principal do programa, que continua até o usuário escolher sair

    console.log("===== Menu ====="); 
    console.log(); // da um espaço em branco no console
    console.log("1. Mostrar resumo do personagem");
    console.log("2. Treinar Ataque");
    console.log("3. Curar Personagem");
    console.log("4. Upar Personagem");
    console.log("9. Sair");
    console.log();
    escolha = +teclado("Escolha: "); // solicita a escolha do usuário no menu

    switch (escolha) {

        case 1: // exibe o resumo do personagem criado
            if (personagem !== null) { // verifica se um personagem foi criado, se foi mostra o personagem, se não, exibe uma mensagem informando que ainda não foi criado
                console.clear();
                console.log("===== Resumo do Personagem =====");
                console.log();
                console.table(personagem);
                console.log();
                teclado("Pressione qualquer tecla para continuar...");
            } else {
                console.clear();
                console.log("Você ainda não criou um personagem!");
                console.log();
                teclado("Pressione qualquer tecla para continuar...");
            }
        break;

        case 2: // treina ataque
            try{
                personagem.treinarAtaque()
            } catch (erro) {
                console.log((erro as Error).message)
                escolha = 9;
            }
        break

        case 3: 
            try{
                personagem.curarPersonagem()
            } catch (erro) {
                console.log((erro as Error).message)
            }
        break

        case 4:
            personagem.uparPersonagem()
            console.log(`Você está no nível ${personagem.nivel} com ${personagem.vida} de vida e ${personagem.ataque} de ataque`)
        break;

        case 9: // sai do loop e encerra o programa
            console.clear();
            console.log("Saindo...");
        break;
    }
}