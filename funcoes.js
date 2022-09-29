//Funções são blocos de codigo de costruções funçionais em javascript. Uma função e uma procedimento de javascript - um conjunto
//de istruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve definir -la em um algum lugar no ecopo do qual você quiser chamá-la.



//Parãmetros 
//são valores que passamos as funções , para que ela utilizão esses valores dentro deles
function cumprimentar(mesagem, repetir = 2){
    for(let i = 1; i <= repetir; i++){

        alert(mesagem.toUpperCase())
        document.write(`${mesagem}`)
        console.log(mesagem,repetir)
    }
}


function soma(num , num2){
    let result = num+ num2
    return result
}
// soma()
function maiorValor(a,  b){
    if (a > b){
        return a
    }else{
        return b
    }
}

let resultado =soma(5, 9);
console.log(`O valor da variavel resultado é ${resultado}`);
// console.log(maiorValor(5, 10));

const num1 = parseFloat(prompt(`Digite o primeiro numero`))
const num2 = parseFloat(prompt(`Digite o segundo numero`))

alert(`O mair numero e ${maiorValor(num1, num2)}`)



// cumprimentar(prompt(`Olá,coloque um valor${mesagem}` ))



//  Criem uma função que gera o resultado de uma equação do segundo grau
 
//   ax² + bx + c = 0
 
//   delta = b² - 4ac
//   b = -b +- raíz de delta / 2a
 

function equacaoSegundoGrrau(a, b, c){

    const delta = b ** 2 -4 * a * c
    const raizDelta = Math.sqrt(delta)
    const x1 = (-b + raizDelta /(2 * a))
    const x2 = (-b - raizDelta) / (2 *  a)

    return [x1, x2]
}
console.log(equacaoSegundoGrrau(1, -1, -12))



    
//     function calculaDelta (n1, n2, n3) {

//         var delta = (n2 * n2) - (4*n1*n3)
//         return delta
//     }

//     function calculaEquaçãoPositiva (n1, n2) {

//         var x = ((-n2) + Math.sqrt(delta)) / (2 * n1)
//         return x

//     }

//     function calculaEquaçãoNegativa (n1, n2) {

//         var x = ((-n2) - Math.sqrt(delta)) / (2 * n1)

//         return x

//     }
//     var a = 1
//     var b = -1  
//     var c = -12

//     var delta = calculaDelta (a, b, c);
//     var resultado1 = Math.round(calculaEquaçãoPositiva(a, b));
//     var resultado2 = Math.round(calculaEquaçãoNegativa(a, b));


// mostra("delta é " + delta);
// mostra("resultado é x¹ = " + resultado1 + " ou x² =  " + resultado2);
