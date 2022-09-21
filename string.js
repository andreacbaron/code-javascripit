// Delimitação de string

const aspasSimples = "Olá, mundo";
console.log(aspasSimples);

//Carecteres de escapa

const aspasDupla = "Olá eu sou o \n javascript. eu sou melhor que n o \n python";
console.log(aspasDupla);

const textoCrase = `"Olá eu sou o  javascript. eu sou melhor que n o  python"`
console.log(textoCrase);
const nomeUsuario = prompt(`Olá usuario qual e seu nome?`)
const idadeUsuario = parseInt(prompt(`Olá usuario qual e seu idade?`));
alert("Entao seu nome e! " + nomeUsuario);
// console.log("Olá, minha idade é" (20 + 5));
// console.log(`Olá, minha idade é  ${nomeUsuario}`);

//metado das strings

const texto = 'O javascript foi criada muito antes do python . o javascript e mais bacana';
// const text2 = 
console.log(texto);
console.log(texto.toLocaleLowerCase())
console.log(texto.toLocaleUpperCase())
console.log(texto.concat('O javascript foi criada muito antes do python . o javascript e mais bacana'))
// console.log(texto(6))

console.log(texto.substring(1, 2));
// São case sensitive
console.log(texto.replace('Javascript', 'Ruset'));
console.log(texto.replaceAll('javascript', 'Ruset'));
console.log(texto.replaceAll('javascript', 'Kotlin'));
console.log(texto.replaceAll(/javascript/g, 'PHP'));
console.log(texto.replaceAll(/javascript/gi, 'PHP'));



const html = '<!DOCTYPE html>\n<html></html>'
console.log(html.startsWith('<!DOCTYPE html>\n<html></html>'))
console.log(html.startsWith('batata'))

console.log(html.startsWith('</body>'))
const  mensagem ="";

console.log(mensagem)
console.log(mensagem.trim());
let senha = 'sonic';

console.log(senha.length);
console.log(senha.length >=8);
