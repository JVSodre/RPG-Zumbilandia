import { Arma } from "./Arma.ts";
import { Personagem } from "./Personagem.ts";
import prompt from "prompt-sync";

const teclado = prompt(); // variavel que permite a entrada de dados do usuario


console.clear(); // limpa a tela do console
console.log("===== Criando um novo personagem ====="); // mensagem informando que o processo de criação do personagem começou
console.log(); 
let nome = teclado("Digite o nome do seu personagem: "); // solicita o nome do personagem ao usuário

let personagem: Personagem = new Personagem(nome) // Cria o personagem principal
let mao: Arma = new Arma("Mão", 5, 10) // cria a arma mão
let bastao: Arma = new Arma("Bastão", 10, 3) // cria a arma bastão, a durabilidade 3 é só um teste

let escolha = 0; // variável para armazenar a escolha do usuário no menu

function mapa() { // função que mostra as opções de locais para explorar no mapa, ainda precisa ser polida 
    console.clear();
    console.log(`
     ______________________________________________________________________
    |                                                                      |
    |       ° Hospital                                                     |
    |                                                                      |
    |                                                                      |
    |                                               °Delegacia             |
    |                                                                      |
    |______________________________________________________________________|
    `);
}

while (escolha !== 9) { // loop principal do programa, que continua até o usuário escolher sair

    console.log("===== Menu ====="); 
    console.log(); // da um espaço em branco no console
    console.log("1. Mostrar resumo do personagem");
    console.log("2. Ataca");
    console.log("3. Curar Personagem");
    console.log("4. Upar Personagem");
    console.log("5. Pegar Bastão")
    console.log("6. Mostrar Mapa")
    console.log("9. Sair");
    console.log();
    escolha = +teclado("Escolha: "); // solicita a escolha do usuário no menu

    switch (escolha) {

        case 1: // exibe o resumo do personagem criado
                console.clear();
                console.log("===== Resumo do Personagem =====");
                console.log();
                console.table(personagem);
                console.log();
                teclado("Pressione qualquer tecla para continuar...");   
            break;

        case 2:
            personagem.arma.ataque(); // puxa a função ataque da arma que reduz sua durabilidade
            console.log(personagem.arma); // mostra os status da arma
            if (personagem.arma.durabilidade <= 0) { // verifica se a arma tem 0 de durabilidade, se tiver ela quebra e o personagem volta a ter a mao como arma
                personagem.arma = mao
                bastao.restaura() // puxa a função que restaura a durabilidade da arma, assim da pra reutilizar ela
            }
            teclado("Pressione qualquer tecla para continuar...");
            break;
/*        case 2: // treina ataque
            try{
                personagem.treinarAtaque()
            } catch (erro) {
                console.log((erro as Error).message)
                escolha = 9;
            }
            break
*/
        case 3: 
            try{
                personagem.curarPersonagem()
            } catch (erro) {
                console.log((erro as Error).message)
            }
            break

        case 4:
            personagem.uparPersonagem()
            console.log(`Você está no nível ${personagem.nivel} com ${personagem.vidaAtual} de vida e ${personagem.arma} de arma`)
            break;

        case 5: 
            console.log(personagem.arma) // visualização de teste
            console.log("você quer pegar o bastão? (S / N)") 
            let troca = teclado("Escolha: ").toUpperCase() 
            if (troca == "S") { // verifica se o usuário quer trocar de arma
                personagem.arma = bastao; // troca a arma do personagem
            }
            console.log(personagem.arma) // visualização de teste
            teclado("Pressione qualquer tecla para continuar...")
            break;
        
        case 6:
            mapa() // mostra o mapa ao usuário
            teclado("Pressione qualquer tecla para continuar...")
            break

        case 9: // sai do loop e encerra o programa
            console.clear();
            console.log("Saindo...");
            break;
    }
}