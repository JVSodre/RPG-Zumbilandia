import { Local } from "../models/locais/Local.js";

export class Mapa {
  public static sortearLocais(lista: Local[], quantidade: number = 3): Local[] {
    const embaralhado = [...lista].sort(() => Math.random() - 0.5);
    return embaralhado.slice(0, quantidade);
  }

  public static gerarAscii(locaisSorteados: Local[]): string {
    const largura = 70;
    const altura = 8;

    const tela: string[][] = Array.from({ length: altura }, () =>
      Array(largura).fill(" ")
    );

    const linhaSuperior = tela[0];
    const linhaInferior = tela[altura - 1];

    // 1. Desenha as bordas superior e inferior verificando se as linhas existem
    if (linhaSuperior && linhaInferior) {
      for (let col = 0; col < largura; col++) {
        linhaSuperior[col] = "_";
        linhaInferior[col] = "_";
      }
    }

    // 2. Desenha as paredes laterais
    for (let lin = 1; lin < altura; lin++) {
      const linhaAtual = tela[lin];
      if (linhaAtual) {
        linhaAtual[0] = "|";
        linhaAtual[largura - 1] = "|";
      }
    }

    // 3. Escreve cada local sorteado na sua coordenada
    locaisSorteados.forEach((local, index) => {
      const texto = `° [${index + 1}] ${local.nome}`;
      const linhaDestino = tela[local.linha];

      if (linhaDestino) {
        for (let i = 0; i < texto.length; i++) {
          const caractere = texto[i];
          if (caractere !== undefined && local.coluna + i < largura - 1) {
            linhaDestino[local.coluna + i] = caractere;
          }
        }
      }
    });

    return tela.map((linha) => linha.join("")).join("\n");
  }
}