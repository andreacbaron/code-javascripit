//Arrays ou Vetores e um tipo especial que permite armazenar 
//diversos valores em apenas um local



//Criar um arrays em javascript

// let arr = new Array()
// let arr2 = new Array(5)
//cada valor de um array e separado por virgula, um array dentro do outro e considerado matriz
//Dentro de um array eu po
//sempre que passarmos um valor que não existe retornara undefined

let arr = [10, 15, 9.8, "Eu sou em texto dentro de um array", "Olá, mundo", true, false, false] //mais usada
console.log(arr[22, 5, 7])
arr[6] = "outro texto";
arr[8] = "Agora a posição 8 existe dentro de arr";
console.log(arr[8]); //outro valor

const lista = ['Anthony', 'Aaron', 'Reinaldo', 'Josias', 'Sandy', 'Andrea']

console.log(lista)
lista.push('yara') //adicionar um valor no final do array
console.log(lista)
lista.unshift('Jniffer') //adicionar um valor no inicio do array
console.log(lista)
lista.pop() //remover o primeiro valor do array
lista.shift() //remover o primeiro valor do array
console.log(lista.concat('Andrea')) //cria um novo array adicionando o valor passando como parametro
console.log(lista)
console.log(lista)
console.log(lista.join('==')) //joao -> maria->...