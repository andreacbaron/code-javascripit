// o peradores logicos
//E 
//vv=> v
// fv -> false

//MEDIA PRECENSA SER OU IGUAL A 7 E PRECISA TER NO MINIMO 80% DE PRESENSA
const media = (3.5 + 6+ 10)/3;
const presenca = 0.7

console.log(media >= 7 && presenca >= 0.8);

// operador Ou

// vv -> V
// fv -> V
//vf -> v
//f f - V

console.log(4 > 7 || 3 < 2); // false 
console.log(5 > 3.5 || 7 < 8); // true

const estado = "SP";
console.log(estado == "SP" || estado == "MG");

//idade minima e maxima para votação
const idade = 30;
console.log(idade >= 16 || idade < 60);

// numeros binario
//0 False e 1true 
//NOT V -> F
//NOT -> V


const resultado = !resultado;
console.log(!true);
console.log(!true);
console.log(!false);

const logado = false;

if (!logado){
    console.log("voce nao pode acessa esse site");
}



