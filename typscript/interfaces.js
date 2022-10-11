"use strict";
let pessoa = {
    nome: 'Andrea',
    idade: 27,
    alura: 1.74,
    cpf: "111.034.789-09",
    solteiro: false,
    habilidades: ['java', 'angular', 'tipscript', 'javascript, Node.js', 'Spring Boot'],
    endereco: {
        rua: 'Jose Maciel Neto',
        numero: 215,
        estado: 'SP',
        complemento: 'sem complemento',
        cp: '12306734576'
    }
};
let pessoa2 = {
    nome: 'Andrea',
    idade: 27,
    alura: 1.74,
    cpf: "111.034.789-09",
    solteiro: false,
    habilidades: ['java', 'angular', 'tipscript', 'javascript, Node.js', 'Spring Boot'],
    endereco: {
        rua: 'Jose Maciel Neto',
        numero: 215,
        estado: 'SP',
        complemento: 'sem complemento',
        cp: '123.067.345-76'
    },
    rg: 5673658
};
const p = {
    altura: 1.74,
    nome: "Andrea",
    idade: 27,
    cpf: "245768095664",
    solteiro: true,
    habilidades: ["HTML"],
    endereco: {
        rua: 'Jose Maciel Neto',
        numero: 215,
        estado: 'SP',
        complemento: 'nem um complemento',
        cp: '12306734576',
    },
    cumprimentar() {
        console.log("Saudações, meu nome é " + this.nome);
    },
};
const p2 = {
    nome: 'Anthony',
    idade: 2,
    alura: 1.0,
    cpf: "111.034.789-09",
    solteiro: false,
    habilidades: ['java'],
};
