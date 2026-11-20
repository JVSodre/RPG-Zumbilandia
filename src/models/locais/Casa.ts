import { Local, ItemCura, Arma, SubArea } from "./Local.js";
import { Personagem } from "../Personagem.js";

export class Casa extends Local {
  constructor(linha: number, coluna: number, personagem: Personagem) {
    const adjetivos = [
      "Verde",
      "com Portão de Garagem Aberto",
      "com Tijolos Aparentes",
      "em Construção",
      "Abandonada",
      "de Madeira",
      "com Manchas Escuras na Porta",
      "com Portão Enferrujado",
    ];

    const adjetivoSorteado =
      adjetivos[Math.floor(Math.random() * adjetivos.length)] ?? "Abandonada";

    const subAreas: SubArea[] = [
      {
        nome: "Cozinha",
        descricao: "Armários entreabertos e louça suja acumulada na pia.",
      },
      {
        nome: "Sala de Estar",
        descricao: "Móveis revirados e janelas cobertas com tábuas improvisadas.",
      },
      {
        nome: "Garagem",
        descricao: "Ferramentas espalhadas pelo chão e um carro sem rodas.",
      },
      {
        nome: "Quarto Principal",
        descricao: "Gavetas puxadas para fora e roupas jogadas sobre a cama.",
      },
    ];

    // Passa o nome já montado com o adjetivo para a classe pai Local
    super(`Casa ${adjetivoSorteado}`, linha, coluna, subAreas, personagem);
  }

  protected getItensDeCura(): ItemCura[] {
    return [
      { nome: "Analgésico de Gaveta", cura: 10 },
      { nome: "Biscoito Cream Cracker", cura: 8 },
      { nome: "Garrafa de Suco", cura: 12 },
      { nome: "Curativo Adesivo", cura: 6 },
    ];
  }

  protected getArmasRaras(): Arma[] {
    return [
      { nome: "Martelo de Carpinteiro", dano: 13, durabilidade: 100},
      { nome: "Faca de Cozinha", dano: 11, durabilidade: 100},
      { nome: "Chave de Grifo", dano: 15, durabilidade: 100 },
    ];
  }

  protected getMaxZumbis(): number {
    return 2; // Residências costumam ter poucos zumbis (1 ou 2)
  }
}