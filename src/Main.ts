import prompt from "prompt-sync";
import { Arma } from "./models/Arma.ts";
import { Personagem } from "./models/Personagem.ts";
import { ZumbiCritico } from "./models/ZumbiCritico.ts";
import { Combate, ResultadoTurno } from "./services/Combate.ts";
import { Zumbi } from "./models/Zumbi.ts";
import { Local } from "./models/locais/Local.ts";
import { Hospital } from "./models/locais/Hospital.ts";
import { Supermercado } from "./models/locais/Supermercado.ts";
import { Delegacia } from "./models/locais/Delegacia.ts";
import { Casa } from "./models/locais/Casa.ts";
import { Mapa } from "./utils/Mapa.ts";

const teclado = prompt(); // variavel que permite a entrada de dados do usuario

console.clear(); // limpa a tela do console
console.log("===== Criando um novo personagem ====="); // mensagem informando que o processo de criação do personagem começou
console.log(); 
console.log("Você achou um bastão e equipou ele já! Cuide da sua durabilidade")
console.log();
let nome = teclado("Digite o nome do seu personagem: "); // solicita o nome do personagem ao usuário

let personagem: Personagem = new Personagem(nome); // Cria o personagem principal
personagem.trocaArma = new Arma("Bastão", 15, 12);
let zumbiCritico = new ZumbiCritico(); // cria o zumbi critico

let escolha = 0; // variável para armazenar a escolha do usuário no menu

function combate(personagem: Personagem, zumbi: Zumbi): boolean { // função que realiza o combate entre o personagem e o zumbi
    escolha = 0; // reseta a escolha do usuário para 0, assim o combate pode ser reiniciado

    while(zumbi.vida > 0 && personagem.vidaAtual > 0){
        console.clear();    
        console.log(`===== Combate =====`);
        console.table({
            Personagem: personagem.nome,
            VidaPersonagem: `${personagem.vidaAtual}/${personagem.vidaMaxima}`,
            ArmaEquipada: personagem.arma.nome,
            DurabilidadeArma: personagem.arma.durabilidade,
            VidaZumbi: zumbi.vida}) // mostra a vida do personagem, o dano da arma, a arma equipada e a vida do inimigo    
        
        console.log("1. Atacar");
        console.log("2. Curar (+15 HP)");
        console.log("3. Pula rodada")
        console.log();
        escolha = +teclado("Escolha: ");
        console.log();

        let resultadoTurno: ResultadoTurno;
        
        switch (escolha) {
            case 1: // caso o usuário escolha atacar, a vida do inimigo é reduzida pelo dano da arma
                resultadoTurno = Combate.turnoAtaque(personagem, zumbi);
                console.log(`Você atacou com ${personagem.arma.nome} e causou ${resultadoTurno.danoCausado} de dano!`);
                break;

            case 2: // caso o usuário escolha curar, a vida do personagem é aumentada em 10
                try {
                    personagem.curarPersonagem() // faz a tentativa de curar o personagem
                    console.log(`Você se curou! Vida atual: ${personagem.vidaAtual}/${personagem.vidaMaxima}`);
                } catch (erro) {
                    console.log((erro as Error).message)
                }
                resultadoTurno = Combate.turnoNormal(personagem, zumbi);
                break;
            
            case 3: // caso o usuário escolha pular a rodada, a vida do personagem é reduzida pelo dano do inimigo
                console.log("Você pulou a rodada!");
                resultadoTurno = Combate.turnoNormal(personagem, zumbi);
                break;
            default: 
                    console.log("❌ Opção inválida!");
                    teclado("Pressione uma tecla para tentar novamente...");
                    continue;
            }

            if (resultadoTurno.armaQuebrou) {
            console.log(`Sua arma (${resultadoTurno.nomeArmaQuebrada}) quebrou! Você voltou a lutar com as Mãos.`);
            }

            if (!resultadoTurno.zumbiDerrotado) {
                if (resultadoTurno.zumbiCriticoAtivado) {
                    console.log(`GOLPE CRÍTICO! O zumbi causou ${resultadoTurno.danoSofrido} de dano em você!`);
                } else {
                    console.log(`O zumbi atacou e causou ${resultadoTurno.danoSofrido} de dano em você!`);
                }
            }

            console.log();
            teclado("Pressione uma tecla para continuar...");
        }

    console.clear();
    if (zumbi.vida <= 0) { // caso a vida do inimigo seja menor ou igual a 0, o usuário vence o combate
        console.log("Você venceu o combate!");
        personagem.uparPersonagem(zumbi.xp); // upar o personagem com o xp do zumbi
        zumbi.resetaVida(); // reseta a vida do inimigo para o valor inicial
        teclado("Pressione uma tecla para continuar...");
        return true;
    } else {
        console.log(`Sua jornada acaba aqui...`)
        teclado("Pressione uma tecla para continuar...");
        return false;
    }

}

function mapa() {
    console.clear();

    const todosLocais: Local[] = [
        new Hospital(2, 45),
        new Supermercado(4, 48),
        new Delegacia(6, 50),
        new Casa(2, 3),
        new Casa(5, 3),
    ];

    const locaisSorteados = Mapa.sortearLocais(todosLocais, 3);
    console.log(Mapa.gerarAscii(locaisSorteados));
    console.log();

    locaisSorteados.forEach((local, index) => {
        console.log(`${index + 1}. ${local.nome}`);
    });
    console.log("0. Voltar ao menu");
    console.log();

    const opcaoLocal = +teclado("Para onde deseja ir? ");
    if (opcaoLocal === 0) return;

    const localEscolhido = locaisSorteados[opcaoLocal - 1];
    if (!localEscolhido) {
        console.log("Local inválido!");
        teclado("Pressione qualquer tecla para continuar...");   
        return;
    }

    const resultado = localEscolhido.explorar();
    console.clear();
    console.log(`===== Explorando: ${resultado.local} (${resultado.subArea.nome}) =====`);
    console.log(resultado.subArea.descricao);
    console.log();

    switch (resultado.tipo) {
        case "cura":
            personagem.vidaAtual = Math.min(
                personagem.vidaMaxima,
                personagem.vidaAtual + resultado.item.cura
            );
            console.log(`Você encontrou "${resultado.item.nome}" e recuperou ${resultado.item.cura} de vida! (Vida atual: ${personagem.vidaAtual}/${personagem.vidaMaxima})`);
            teclado("Pressione qualquer tecla para continuar...");   
            break;

        case "arma":
            console.log(`Você encontrou uma arma rara: ${resultado.arma.nome} (Dano: ${resultado.arma.dano} | Durabilidade: ${resultado.arma.durabilidade})!`);
            const equipar = teclado("Deseja equipar essa arma? (S / N): ").toUpperCase();
            if (equipar === "S") {
                personagem.trocaArma = new Arma(
                    resultado.arma.nome,
                    resultado.arma.dano,
                    resultado.arma.durabilidade
                );
                console.log(`${resultado.arma.nome} equipada!`);
            }
            teclado("Pressione qualquer tecla para continuar...");   
            break;

        case "combate":
            console.log(`Apareceram ${resultado.qtdZumbis} zumbi(s)! O combate começou!`);
            teclado("Pressione uma tecla para iniciar o combate...");
            for (let i = 0; i < resultado.qtdZumbis; i++) {
                console.log(`\n--- Enfrentando zumbi ${i + 1} de ${resultado.qtdZumbis} ---`);
                zumbiCritico.resetaVida();
                const venceu = combate(personagem, zumbiCritico);
                if (!venceu) {
                    escolha = 5;
                    return;
                }
            }
            break;
    }

    escolha = 0;
}

while (escolha !== 5) { // loop principal do programa, que continua até o usuário escolher sair
    console.clear();
    console.log("===== Menu ====="); 
    console.log(); // da um espaço em branco no console
    console.log("1. Mostrar resumo do personagem");
    console.log("2. Upar Personagem");
    console.log("3. Descansar e se Curar");
    console.log("4. Mostrar Mapa");
    console.log("5. Sair")
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
            personagem.uparPersonagem(100)
            console.log(`Você está no nível ${personagem.nivel} com ${personagem.vidaAtual} de vida e ${personagem.arma.nome} de arma`)
            teclado("Pressione qualquer tecla para continuar...");   
            break;

        case 3: 
            try{
                personagem.curarPersonagem()
                console.log(`Você se curou! ${personagem.vidaAtual}/${personagem.vidaMaxima}`)
            } catch (erro) {
                console.log((erro as Error).message)
            }
            teclado("Pressione qualquer tecla para continuar...");   
            break

        case 4:
            mapa() // mostra o mapa ao usuário
            break

        case 5: // sai do loop e encerra o programa
            console.clear();
            console.log("Saindo...");
            break;
    }
}