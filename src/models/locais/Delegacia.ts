import { Local, ItemCura, Arma } from "./Local.js";

export class Delegacia extends Local {
  constructor(linha: number, coluna: number) {
    super("Delegacia", linha, coluna, [
      {
        nome: "Recepção",
        descricao: "Vidros blindados trincados e papéis espalhados atrás do balcão.",
      },
      {
        nome: "Sala de Evidências",
        descricao: "Prateleiras metálicas tombadas e caixas lacradas reviradas.",
      },
      {
        nome: "Arsenal",
        descricao: "A porta de ferro foi forçada, mas alguns suportes ainda têm equipamento.",
      },
    ]);
  }

  protected getItensDeCura(): ItemCura[] {
    return [
      { nome: "Café Frio da Garrafa Térmica", cura: 5 },
      { nome: "Kit Tático de Emergência", cura: 25 },
      { nome: "Rosquinha Velha", cura: 8 },
    ];
  }

  protected getArmasRaras(): Arma[] {
    return [
      { nome: "Cassetete Policial", dano: 19, durabilidade: 20 },
      { nome: "Espingarda Calibre 12", dano: 35, durabilidade: 6 },
      { nome: "Machado de Arrombamento", dano: 26, durabilidade: 15 },
    ];
  }

  protected getMaxZumbis(): number {
    return 3;
  }
}