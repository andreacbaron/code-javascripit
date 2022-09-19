
function exercicio1() {
    //Exercício 1.Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
    //perímetro.
    alert('Área e perimetro');
    let altura = Number(prompt('Por favor, digite a altura'));
    let base = Number(prompt('Por favor, digite a base'));
    let area = base * altura;
    let perimetro = (base * 2) + (altura * 2);
    console.log(`area: ${area}, perimetro: ${perimetro}`);
    //templet string = ${nomeDaVariavel}
    // perimetro = todos os ladoa;
    // area = base * altura;
}

function exercicio2() {
    //Exercício 2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
    alert('Área e perimetro');
    let altura = Number(prompt('Por favor, digite a altura'));
    let base = Number(prompt('Por favor, digite a base'));
    let area = altura * altura;
    let perimetro = (altura * 2) + (altura * 2);
    console.log(`area: ${area}, perimetro: ${perimetro}`);
    //templet string = ${nomeDaVariavel}
    // perimetro = todos os ladoa;
    // area = base * altura;
}

function exercicio3() {
    //Exercício 3. Dado o tamanho do raio de uma 
    //circunferência, calcular a área e o perímetro da mesma.
    alert('Área e perimetro do círculo');
    let raio = Number(prompt('Por favor, digite o raio'));
    const pi = 3.14
    let area = Math.pow(raio, 2) * pi
    let perimetro = 2 * raio
    prompt('A área do cirlulo é!', area);
    console.log(`area: ${area}, perimetro: ${perimetro}`);
    //templet string = ${nomeDaVariavel}
}

function exercicio4() {
    //Exercicício 4. Dado os três lados de um triângulo determinar o perímetro do mesmo.
    alert('Três lados de um triângulo');
    let primeiroLado = Number(prompt('Por favor, digite primeiro lado'));
    let segundoLado = Number(prompt('Por favor, digite segundo lado'));
    let terceiroLado = Number(prompt('Por favor, digite terceiro lado'));
    let perimetro = primeiroLado + segundoLado + terceiroLado;
    let lado = `primeiroLado: ${primeiroLado}, segundoLado: ${segundoLado}, terceiroLado: ${terceiroLado}`;
    prompt('O perimetro é', perimetro);

    console.log(`${lado}, perimetro: ${perimetro}`);
    //templet string = ${nomeDaVariavel}
}


function exercicio5() {
    //Exercício 5. Ler um número inteiro e exibir o seu sucessor
    alert('Número inteiro que exibe o sucessor');
    let num = Number(prompt('Ola,' + ' Digite algum número, por favor'));
    prompt('O secessor é!', ++num);
    console.log(num);
    console.log(++num);
}


function exercicio6() {
    // Exercício 6. Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.
    alert('ler 2 números inteiros e exibir o quociente e o resto da divisão');
    let valor1 = Number(prompt('Olá,' + ' Digite algum número, por favor'));
    let valor2 = Number(prompt('Olá,' + ' Digite algum número, por favor'));
    let resto = valor1 % valor2;
    let quociente = (valor1 - resto) / valor2;
    prompt('O quociente é', quociente);
    prompt('O resto é', resto);

    console.log(`valor1: ${valor1}, valor2: ${valor2}, resto: ${resto}, quociente: ${quociente} `);
}


function exercicio7() {
    //Exercicio 7. Dado que a fórmula para conversão de Fahrenheit para 
    //Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius
    alert("Conversor de Fahrenheit para Celsius");
    let f = parseFloat(prompt("digite a temperatura em Fahrenheit"));
    let c = (f - 32) * 5 / 9;
    prompt("A temperatura é : ", c);
    console.log(`f: ${f}, c: ${c}`);
}

function exercicio8() {
    //Exercicio 8. Faça um algoritmo que calcule e apresente o valor do 
    //volume de uma lata de óleo, dadoseu raio e sua altura.
    alert("Volume da lata de óleo");
    let raio = Number(prompt("Por favor, digite raio da lata de óleo"));
    let altura = Number(prompt("Por favor, digite altura da lata de óleo"));
    const pi = 3.14
    let area = Math.pow(altura, 2) * pi;
    let volume = area * raio
    prompt("o volume é: ", volume);

    console.log(`raio: ${raio}, altura: ${altura}, area: ${area}, volume ${volume}`);

}


function mostraTodosResultados(){ //chama todos os exercicios;
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
}

// mostraTodosResultados();

function escolhaQuetao(){ 

   let questao = Number(prompt('Digite quetão')); //pega o valor digitado pelo usuario e coverte em number
    switch(questao){ // o switch recebe como argumento o valor digitado pelo usuario e e executa os execicios de acordo com o valor digitado;
        case 1:
            return exercicio1();
        case 2:
            return exercicio2();
        case 3:
            return exercicio3();
        case 4:
            return exercicio4();
        case 5:
            return exercicio5();
        case 6:
            return exercicio6();
        case 7:
            return exercicio7();
        case 8:
            return exercicio8();
        default:  //se o valor digitado for diferente entre 1 e 8, execute o default;
            return mostraTodosResultados();
    }
}

escolhaQuetao();