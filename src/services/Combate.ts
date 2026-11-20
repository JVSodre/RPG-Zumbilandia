import { Personagem } from "../models/Personagem.ts";
import { Zumbi } from "../models/Zumbi.ts";
import { Arma } from "../models/Arma.ts"

export interface ResultadoTurno {
  danoCausado: number;
  danoSofrido: number;
  zumbiDerrotado: boolean;
  zumbiCriticoAtivado: boolean;
  armaQuebrou: boolean;
  nomeArmaQuebrada?: string | undefined;
}

export class Combate {
    private static criarMao(): Arma {
        return new Arma("Mão", 5, 100);
    }

    private static executarAtaqueZumbi(personagem: Personagem, zumbi: Zumbi): {danoSofrido: number; critico: boolean} {
        const danoBase = zumbi.dano;
        zumbi.habilidade();
        const danoFinal = zumbi.dano;
        const critico = danoFinal > danoBase;

        personagem.vidaAtual = Math.max(0, personagem.vidaAtual - danoFinal);
        zumbi.resetaDano();

        return { danoSofrido: danoFinal, critico};
    }

    private static executarAtaquePersonagem(personagem: Personagem, zumbi: Zumbi): {danoCausado: number} {
        let zumbiVida = zumbi.vida;
        const danoCausado = zumbiVida - personagem.arma.dano
        zumbi.vida -= personagem.arma.dano
        personagem.arma.ataque()

        return {danoCausado: danoCausado}
    }

    public static turnoAtaque(personagem: Personagem, zumbi: Zumbi): ResultadoTurno {
        const danoCausado = this.executarAtaquePersonagem(personagem, zumbi)       
        const statusArma = this.verificaDurabilidadeArma(personagem);

        if (zumbi.vida <= 0) {
            return {
                danoCausado: danoCausado.danoCausado,
                danoSofrido: 0,
                zumbiDerrotado: true,
                zumbiCriticoAtivado: false,
                armaQuebrou: statusArma.quebrou,
                nomeArmaQuebrada: statusArma.nomeArma,
            };
        }

        const ataqueZumbi = this.executarAtaqueZumbi(personagem, zumbi);

        return {
            danoCausado: danoCausado.danoCausado,
            danoSofrido: ataqueZumbi.danoSofrido,
            zumbiDerrotado: false,
            zumbiCriticoAtivado: ataqueZumbi.critico,
            armaQuebrou: statusArma.quebrou,
            nomeArmaQuebrada: statusArma.nomeArma,
        };
    }

    private static verificaDurabilidadeArma(personagem: Personagem): {quebrou: boolean; nomeArma?: string;} {
        if (personagem.arma.durabilidadeAtual <= 0) {
            const nomeArma = personagem.arma.nome;
            personagem.arma.restaura();
            personagem.trocaArma = this.criarMao();
            return { quebrou: true, nomeArma };
        }
        return { quebrou: false };
    }

    public static turnoNormal(personagem: Personagem, zumbi: Zumbi): ResultadoTurno {
        const ataqueZumbi = this.executarAtaqueZumbi(personagem, zumbi);

        return {
        danoCausado: 0,
        danoSofrido: ataqueZumbi.danoSofrido,
        zumbiDerrotado: zumbi.vida <= 0,
        zumbiCriticoAtivado: ataqueZumbi.critico,
        armaQuebrou: false,
        };
    }
}