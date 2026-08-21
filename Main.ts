import { Personagem } from "./Personagem.ts"; // Importando o arquivo de Personagem
import prompt from "prompt-sync";

const teclado = prompt();

 // para usar o prompt-sync

const p: Personagem = new Personagem(); // cria o objeto tipo Personagem

function criarPersonagem() {
    p.nome = teclado("Digite o nome do seu personagem: "); //já aparece o "nome" depois do "p", já que importamos o Personagem
    p.classe = teclado("Qual a classe do seu personagem: ");
    p.nivel = 1;
    p.vida = 10;
    p.arma = "Livro de lógica - Bem legal"
}

let escolha = 0;
while (escolha !== 9){
    console.log('1. Criar Personagem');
    console.log('2. Mostrar resumo do personagem')
    console.log('9. Sair')
    escolha = +teclado('Escolha: ');
    switch(escolha) {
    case 1 : criarPersonagem() 
    break
    case 2 : console.table(p)
    break
    }
}

