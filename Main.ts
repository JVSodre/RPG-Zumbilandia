import { Arma } from "./Arma.ts";
import { Personagem } from "./Personagem.ts";
import prompt from "prompt-sync";
import { ZumbiCritico } from "./ZumbiCritico.ts";
import { Combate } from "./Combate.ts"
import { Zumbi } from "./Zumbi.ts";

const teclado = prompt(); // variavel que permite a entrada de dados do usuario


console.clear(); // limpa a tela do console
console.log("===== Criando um novo personagem ====="); // mensagem informando que o processo de criação do personagem começou
console.log(); 
let nome = teclado("Digite o nome do seu personagem: "); // solicita o nome do personagem ao usuário

let personagem: Personagem = new Personagem(nome) // Cria o personagem principal
let mao: Arma = new Arma("Mão", 5, 10) // cria a arma mão
let bastao: Arma = new Arma("Bastão", 10, 3) // cria a arma bastão, a durabilidade 3 é só um teste
let zumbiCritico = new ZumbiCritico() // cria o zumbi critico
 
let escolha = 0; // variável para armazenar a escolha do usuário no menu

function combate(personagem: Personagem, zumbi: Zumbi): void{ // função que realiza o combate entre o personagem e o zumbi
    escolha = 0; // reseta a escolha do usuário para 0, assim o combate pode ser reiniciado
    while(zumbi.vida > 0 && personagem.vidaAtual > 0){
    console.clear();    
    console.log(`===== Combate =====`);
    console.table({personagem, zumbi}) // mostra a vida do personagem, o dano da arma e a vida do inimigo
    console.log("1. Atacar");
    console.log("2. Curar");
    console.log("3. Pula rodada")
    console.log();
    escolha = +teclado("Escolha: ");
        
    switch (escolha) {
        case 1: // caso o usuário escolha atacar, a vida do inimigo é reduzida pelo dano da arma
            Combate.turnoAtaque(personagem, zumbi)
            break;

        case 2: // caso o usuário escolha curar, a vida do personagem é aumentada em 10
            Combate.turnoNormal(personagem, zumbi)
            personagem.curarPersonagem()
            break;
        
        case 3: // caso o usuário escolha pular a rodada, a vida do personagem é reduzida pelo dano do inimigo
            Combate.turnoNormal(personagem, zumbi)
            break;
        }  
    }
    console.clear();
    if (zumbi.vida <= 0) { // caso a vida do inimigo seja menor ou igual a 0, o usuário vence o combate
        console.log("Você venceu o combate!");
        personagem.uparPersonagem(100); // upar o personagem com 100 de xp
        zumbi.resetaVida(); // reseta a vida do inimigo para o valor inicial
    } else {
        console.log(`Sua jornada acaba aqui...`)
        personagem.restauraVida(); // reseta a vida do personagem para o valor inicial
    }
}

function mapa() { // função que mostra as opções de locais para explorar no mapa, ainda precisa ser polida 
    console.clear();
    console.log(`
     ______________________________________________________________________
    |                                                                      |
    |       ° Hospital                              °Banco                 |
    |                                                                      |
    |                                                                      |
    |                                               °Delegacia             |
    |                                                                      |
    |______________________________________________________________________|
    `);
}

while (escolha !== 9) { // loop principal do programa, que continua até o usuário escolher sair
    console.clear();
    console.log("===== Menu ====="); 
    console.log(); // da um espaço em branco no console
    console.log("1. Mostrar resumo do personagem");
    console.log("2. Ataca");
    console.log("3. Curar Personagem");
    console.log("4. Upar Personagem");
    console.log("5. Pegar Bastão")
    console.log("6. Mostrar Mapa")
    console.log("7. Combate")
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
                personagem.trocaArma = mao
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
            personagem.uparPersonagem(100)
            console.log(`Você está no nível ${personagem.nivel} com ${personagem.vidaAtual} de vida e ${personagem.arma.nome} de arma`)
            break;

        case 5: 
            console.log(personagem.arma) // visualização de teste
            console.log("você quer pegar o bastão? (S / N)") 
            let troca = teclado("Escolha: ").toUpperCase() 
            if (troca == "S") { // verifica se o usuário quer trocar de arma
                personagem.trocaArma = bastao; // troca a arma do personagem
            }
            console.log(personagem.arma) // visualização de teste
            teclado("Pressione qualquer tecla para continuar...")
            break;
        
        case 6:
            mapa() // mostra o mapa ao usuário
            teclado("Pressione qualquer tecla para continuar...")
            break

        case 7:
            combate(personagem, zumbiCritico) // chama a função de combate
            teclado("Pressione qualquer tecla para continuar...")
            break
        case 9: // sai do loop e encerra o programa
            console.clear();
            console.log("Saindo...");
            break;
    }
}