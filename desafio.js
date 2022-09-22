// Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento

// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em três vezes ou mai, preço normal de etiqueta mais juros de 10%

// metado de pagameto 
// em dinheio
// em cheque
// no cartao

let precoProduto = parseFloat(prompt("Qual o valor do produto?"));

while (isNaN(precoProduto) == true || precoProduto <= 0){  //while = enquanto
    alert(' O preço digitado e invalido, digite sem caracteres especiais (letras ou acento)');
    precoProduto = parseFloat(prompt('Qual o preço do produto?'));
}

const mensaguem = `
Informe o métado de pagamento 
ditete 1 pagamento em dinheiro
digite 2 pagamento em cheque
digite 3 pagameto e mcartao
`
let metadoDePagameto = prompt(mensaguem);

while (isNaN(metadoDePagameto) < 0 || metadoDePagameto >4){  //while = enquanto
    alert('Métado de pagameto invlido)');
    precoProduto = prompt('informe o preco do produto');
}


console.log(precoProduto);
console.log(metadoDePagameto);


//se o valor da cda costante metadooDePagamento for 
if (metadoDePagameto == 1 || metadoDePagameto == 2) {
    const precoFinal = precoProduto * 0.9;
    alert(`O preco final do pagamento é  ${precoFinal} reais`)
} else if (metadoDePagameto == 3) {


    //1 parcela = 15% de desconto 
    //2 parcelas =preco do produto
    //3 ou mais parcelas = acresimo de 10%
    const parcelas = parseInt(prompt("Informe a quantidade de parcelas"))

    if (parcelas == 1) {
        const precoFinal = precoProduto * 0.85;
        alert(`O preco final do pagamento é  ${precoFinal} reais`)
    } else if (parcelas == 2) {
        alert(`O preço final do produto é ${precoProduto} reais`);
    } else if (metadoDePagameto >= 3) {
        const precoFinal = precoProduto * 1.1;
        alert(`O preço final do produto é ${precoProduto} reais`);
    }
}



//estrutura de repetição