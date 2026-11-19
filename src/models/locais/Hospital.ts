import { Local, ItemCura, Arma } from "./Local.js";

export class Hospital extends Local {
  constructor(linha: number, coluna: number) {
    super("Hospital Central", linha, coluna, [
      {
        nome: "Sala de Triagem",
        descricao: "Macas reviradas e prontuários espalhados pelo chão manchado.",
      },
      {
        nome: "Ala Cirúrgica",
        descricao: "O cheiro de antisséptico ainda paira no ar frio e silencioso.",
      },
      {
        nome: "Farmácia Interna",
        descricao: "Armários de vidro quebrados, mas algumas gavetas seguem trancadas.",
      },
    ]);
  }

  protected getItensDeCura(): ItemCura[] {
    return [
      { nome: "Kit de Primeiros Socorros", cura: 35 },
      { nome: "Analgésico Forte", cura: 20 },
      { nome: "Soro Fisiológico", cura: 15 },
    ];
  }

  protected getArmasRaras(): Arma[] {
    return [
      { nome: "Bisturi Cirúrgico", dano: 18, durabilidade: 8 },
      { nome: "Pé de Cabra de Manutenção", dano: 20, durabilidade: 18 },
    ];
  }

  protected getMaxZumbis(): number {
    return 3;
  }
}