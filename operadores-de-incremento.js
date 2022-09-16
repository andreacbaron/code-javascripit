alert("Codigo Funcional") //serve para mostrar uma mensagem no propap 
const nomeUsuario = prompt('Olá usuario qual seu nome') //mostra uma mensagem e armazena um valor

let num = Number(prompt('Ola,' + nomeUsuario + '. Digite algum número, por favor')) //5
// console.log(typeof num) //typeof retorna o tipo do numero 

// const sucessor = num + 1
// const antecessor = num - 1
// const num =++
// // alert('O sucessor de' + num + 'e ' + sucessor)
// alert('O antcessor de' + num + 'e ' + antecessor)
console.log(num++)  //5//operador de pos-incremento
console.log(num) //6 ele e nulo
console.log(++num) //7 operador de pos-incremento

//operador de decremento
console.log(num--) //7 //operador de pós-decremento
console.log(num)  //6 //operador de nul
console.log(--num) //5 //operador se pré-decremento
