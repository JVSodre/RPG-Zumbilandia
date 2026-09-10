// classe --> campos / atributos --> metodos

export class Personagem { // classe (nome de classe primeiro caractere maiusculo)

    // atributos
    nome: string;
    classe: string;
    nivel: number;
    vida: number;
    ataque: number;
    arma: string;

    constructor( // construto, função que é executada quando a classe é instanciada
        nome: string, // parâmetros do construtor, valores que precisam ser passados quando a classe é instanciada
        classe: string,
        //vida: number,
        //ataque: number,
      
    ) {
        this.nome = nome; // retorna o valor do parâmetro para o atributo da classe
        this.classe = classe;
        this.nivel = 1;
        this.vida = 75;
        this.ataque = 25;
        this.arma = "Livro de Lógica";
    }

    //métodos

    treinarAtaque(): void{
        this.ataque += 5+Math.floor(Math.random()*10);
        this.vida -= 5+Math.floor(Math.random()*10);
        if(this.vida <= 0){
            throw new Error("Personagem morreu!")
        }
    }

    curarPersonagem(): void{
        this.vida += 5+Math.floor(Math.random()*15)
        if (this.vida >= this.vida) {
            throw new Error("Vida máxima!")
        }
    }

    uparPersonagem(): void{
        this.nivel += 1
        this.vida += 75
        this.ataque += 25
    }
}



