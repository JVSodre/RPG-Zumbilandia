export interface SubArea {
  nome: string;
  descricao: string;
}

export interface ItemCura {
  nome: string;
  cura: number;
}

export interface Arma {
  nome: string;
  dano: number;
  durabilidade: number;
}

export type ResultadoExploracao =
  | {
      tipo: "cura";
      local: string;
      subArea: SubArea;
      item: ItemCura;
    }
  | {
      tipo: "arma";
      local: string;
      subArea: SubArea;
      arma: Arma;
    }
  | {
      tipo: "combate";
      local: string;
      subArea: SubArea;
      qtdZumbis: number;
    };

export abstract class Local {
  public nome: string;
  public linha: number;
  public coluna: number;
  protected subAreas: SubArea[];

  constructor(nome: string, linha: number, coluna: number, subAreas: SubArea[]) {
    this.nome = nome;
    this.linha = linha;
    this.coluna = coluna;
    this.subAreas = subAreas;
  }

  protected abstract getItensDeCura(): ItemCura[];
  protected abstract getArmasRaras(): Arma[];
  protected abstract getMaxZumbis(): number;

  // Método auxiliar seguro contra arrays vazios (satisfaz noUncheckedIndexedAccess)
  private sortearItem<T>(lista: T[]): T {
    const item = lista[Math.floor(Math.random() * lista.length)];
    if (!item) {
      throw new Error(`A lista de itens ou sub-áreas de "${this.nome}" está vazia.`);
    }
    return item;
  }

  public explorar(): ResultadoExploracao {
    const areaSorteada = this.sortearItem(this.subAreas);
    const dado = Math.floor(Math.random() * 100) + 1;

    if (dado <= 8) {
      const arma = this.sortearItem(this.getArmasRaras());
      return {
        tipo: "arma",
        local: this.nome,
        subArea: areaSorteada,
        arma,
      };
    }

    if (dado <= 50) {
      const item = this.sortearItem(this.getItensDeCura());
      return {
        tipo: "cura",
        local: this.nome,
        subArea: areaSorteada,
        item,
      };
    }

    const qtdZumbis = Math.floor(Math.random() * this.getMaxZumbis()) + 1;
    return {
      tipo: "combate",
      local: this.nome,
      subArea: areaSorteada,
      qtdZumbis,
    };
  }
}