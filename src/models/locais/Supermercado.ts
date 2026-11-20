import { Local, ItemCura, Arma } from "./Local.js";
import { Personagem } from "../Personagem.js";
import { Util } from "../../utils/Util.js";

export class Supermercado extends Local {
  constructor(linha: number, coluna: number, personagem: Personagem) {
    super("Supermercado", linha, coluna, [
      {
        nome: "Corredor de Bebidas",
        descricao: "Prateleiras tombadas e latas amassadas por toda parte.",
      },
      {
        nome: "Corredor de Enlatados",
        descricao: "Quase tudo foi saqueado, exceto o fundo das gôndolas.",
      },
      {
        nome: "Açougue",
        descricao: "A câmara fria está entreaberta e faz um zumbido constante.",
      },
    ], personagem);
  }

  protected getItensDeCura(): ItemCura[] {
    return [
      { nome: "Energético Monster sem Açúcar", cura: 10 },
      { nome: "Barra de Proteína", cura: 12 },
      { nome: "Garrafa de Água Mineral", cura: 8 },
      { nome: "Feijoada Enlatada", cura: 22 },
    ];
  }

  protected getArmasRaras(): Arma[] {
    return [
      { nome: "Cutelo do Açougueiro", dano: 24, durabilidade: 12 },
      { nome: "Taco de Beisebol de Alumínio", dano: 17, durabilidade: 16 },
    ];
  }

  protected getMaxZumbis(): number {
    return 2;
  }
}