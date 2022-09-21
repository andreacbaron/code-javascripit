


const combustivel = prompt("Digite o código do combustível: ");
// A = ALCOOL  || G = GASOLINA
const litro = prompt("Digite a quantidade de litros: ");

console.log(combustivel)
console.log(litro)


if (combustivel == "A") {
    const alcool = 1.90;
    const custo = litro * alcool;

    if (litro <= 25) {
        const desconto1 = (custo * 2) / 100;
        alert("O desconto do combustível foi de R$ " + desconto1 + " e o valor agora é R$ " + (custo - desconto1));
        console.log(` e o valor agora é R$ ${custo-desconto1}`)
    }
    else {
        const desconto2 = (custo * 4) / 100;
        alert("O desconto do combustível foi de R$ " + desconto2 + " e o valor agora é de R$ " + (custo - desconto2));
        console.log(`O valor com desconto é R$  ${custo-desconto2} `)
    }
}

if (combustivel == "G") {
    const gasolina = 2.70;
    const custo = litro * gasolina;

    if (litro <= 25) {
        const desconto3 = (custo * 3) / 100;
        alert("O desconto do combustível foi de R$ " + desconto3 + " e o valor agora é de R$ " + (custo - desconto3));
        console.log(`O valor com desconto é R$  ${custo-desconto3} `)
    }
    else {
        const desconto4 = (custo * 5) / 100;
        alert("O desconto do combustível foi de R$ " + desconto4 + " e o valor agora é de R$ " + (custo - desconto4));

        console.log(`O valor com desconto é R$  ${custo-desconto4} `)
    }
}
