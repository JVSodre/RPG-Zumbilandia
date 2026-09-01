// classe --> campos / atributos --> metodos

export class Personagem { // classe (nome de classe primeiro caractere maiusculo)

    // atributos
    nome: string;
    classe: string;
    nivel: number;
    vida: number;
    arma: string;


    constructor( // construto, função que é executada quando a classe é instanciada
        nome: string, // parâmetros do construtor, valores que precisam ser passados quando a classe é instanciada
        classe: string,
        nivel: number,
        vida: number,
        arma: string
    ) {
        this.nome = nome; // retorna o valor do parâmetro para o atributo da classe
        this.classe = classe;
        this.nivel = nivel;
        this.vida = vida;
        this.arma = arma;
    }
}



