import { Personagem } from "./Personagem.ts";
import prompt from "prompt-sync";

const teclado = prompt(); // variavel que permite a entrada de dados do usuario

let personagem: Personagem | null = null; // variável global para armazenar o personagem criado

function criarPersonagem() { // função para criar um novo personagem

    console.clear(); // limpa a tela do console
    console.log("===== Criando um novo personagem ====="); // mensagem informando que o processo de criação do personagem começou
    console.log(); 
    let nome = teclado("Digite o nome do seu personagem: "); // solicita o nome do personagem ao usuário
    let classe = teclado("Qual a classe do seu personagem: "); // solicita a classe do personagem ao usuário
    let nivel = 1; // define o nível inicial do personagem
    let vida = 10; // define a vida inicial do personagem
    let arma = "Livro de lógica - Bem legal"; // define a arma inicial do personagem

    let novo_personagem = new Personagem( // cria um novo objeto Personagem com os valores fornecidos pelo usuário
        nome,
        classe,
        nivel,
        vida,
        arma
    );

    personagem = novo_personagem; // armazena o novo personagem na variável global
}

let escolha = 0; // variável para armazenar a escolha do usuário no menu

while (escolha !== 9) { // loop principal do programa, que continua até o usuário escolher sair

    console.clear(); // limpa a tela do console
    console.log("===== Menu ====="); 
    console.log(); // da um espaço em branco no console
    console.log("1. Criar Personagem");
    console.log("2. Mostrar resumo do personagem");
    console.log("9. Sair");
    console.log();
    escolha = +teclado("Escolha: "); // solicita a escolha do usuário no menu

    switch (escolha) {

        case 1: // chama a função para criar um novo personagem
            criarPersonagem();
            console.log();
            console.log("Personagem criado com sucesso!");
            console.log();
            teclado("Pressione qualquer tecla para continuar...");
            break;

        case 2: // exibe o resumo do personagem criado
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
        case 9: // sai do loop e encerra o programa
            console.clear();
            console.log("Saindo...");
            break;
    }
}
