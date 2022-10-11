"use strict";
class Cachorro {
    /**
     * as variáveis dentro da classe se chama atributos ou propriedades
     */
    // nome: string
    // raca: string
    // cor: string
    // idade: number
    // peso: number
    // altura: number
    // morde: boolean
    // vacinado: boolean
    // pedigree: boolean
    /**
     * Método contrutor
     *
     * serve para criar um novo objeto da classe, possamos receber valores para a que a classe
     * utilize - os
     *
     * se o programador não criar o método contrutor, a propria linguagem irá gerar um método
     * construtor padrão, que é vazio.
     *
     * this faz refeência a propria classe dentro dela mesma
     */
    constructor(nome, raca, cor, idade, peso, altura, morde, vacinado, pedigree) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.morde = morde;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
        // this.nome = nome,
        // this.raca = raca,
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
        // this.altura = altura
        // this.morde = morde
        // this.vacinado = vacinado
        // this.pedigree = pedigree
    }
}
/**
 * Objeto é uma instância da classe
 */
let c = new Cachorro('Mike', 'Pitbull', 'Preto', 3, 50, 0.87, true, false, true);
let c2 = new Cachorro('Luna', 'Labrador', 'Amarelo', 5, 23, 0.65, true, true, false);
console.log(c.nome); // Luki
console.log(c2); // Jamal
// construtor(
// )
// class Cachorro {
//     nome: string
//     raca: string
//     cor: string 
//     idade: number 
//     peso: number 
//     altura: number
//     morde: boolean 
//     vacinado: boolean
//     padigree: boolean 
//metado costrutor 
//serve para criar um novo objeto da classe, passamos receber valores para que a classe utiliza-lo
//se o programador não ciar um metado costrutor o propia linguagem vai cilocar um padrão
//no Javascript so pode ter um método construtor
// constructor(nome: string, raca: string, cor: string, idade: number, peso: number, altura: number, moder: boolean, vacxinado: boolean, padgree: boolean){
// //this faz referençia a próprio classe dentro dela mesma
//     this.nome = nome
//     this.raca = raca
//     this.cor = cor
// }
// let c = new Cachorro("lily", )
//     console.log(c.nome, );
// let c2 = new Cachorro("Lobin");
// console.log(c2.nome);
// c2.nome = 'Jamel'
