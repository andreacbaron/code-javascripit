//Objeto é uma estrutura que permite organizar dado na forma de chave-valor
//chave
let end= {
    rua: "José maciel",
    numero: 123,
    estado: "BH",
    complemento: "Sem Complemento",
    cep: '12345456677898',
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf: '123.456.7891-02',
    endereco: {...end},
    casada: true,
    habilidades: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    complemento(){
        //Quando eu desejo referenciar o mesmo objeto 
        console.log(`Olá me nome é ${this.pessoa} ${this.nome} ${this.idade} ${this.cpf} ${this.rua} ${this.numero} ${this.casada}`)

    }


} 

// pessoa.complemento();
// pessoa.nome ="Anthony"
// pessoa.complemento();
// pessoa.habilidades.push('Angular')
// console.log(habilidades.pessoa)
// console.log(pessoa['cpf'])


console.log(end.rua)

console.log(pessoa.rua)
pessoa.endereco.rua = "Boa esperaça"
console.log(pessoa.endereco.rua)

