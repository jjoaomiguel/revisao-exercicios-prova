/* Exercício 1
Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. 
A cada novo número digitado, o valor deve ser acumulado. 
Ao final, exiba o resultado total da soma.


let n = parseFloat (prompt('Quantos números você deseja somar?'));
let soma = 0;

    for (let i = 0; i < n; i++) {
        let pergunta = parseFloat (prompt ('Digite um número: '));
        soma = pergunta + soma;
    }
console.log('A soma é: ' + soma)

*/

/* Exercício 2
Simule uma contagem regressiva para o lançamento de um foguete, 
partindo de 10 até 0, e ao final exiba a mensagem "Lançamento!".



let intervalo = setInterval(lancamento, 1000)
let contagem = 10;

function lancamento() {
    if (contagem >= 0) {
        console.log(contagem);
        contagem--;
    } else {
        console.log('Lançamento!');
        clearInterval(intervalo);
    }
}
lancamento();

*/

/* Exercicio 3
Crie um algoritmo que solicite o ganho bruto e os gastos mensais de uma empresa durante os 12 meses do ano.
Ao final, exiba:  
- Total de ganhos  
- Total de gastos  
- Saldo final  
- E uma mensagem informando se a empresa teve lucro ou prejuízo no ano


let ganho1 = parseFloat(prompt('Digite o ganho bruto de Janeiro: '));
let ganho2 = parseFloat(prompt('Digite o ganho bruto de Fevereiro: '));
let ganho3 = parseFloat(prompt('Digite o ganho bruto de Março: '));
let ganho4 = parseFloat(prompt('Digite o ganho bruto de Abril: '));
let ganho5 = parseFloat(prompt('Digite o ganho bruto de Maio: '));
let ganho6 = parseFloat(prompt('Digite o ganho bruto de Junho: '));
let ganho7 = parseFloat(prompt('Digite o ganho bruto de Julho: '));
let ganho8 = parseFloat(prompt('Digite o ganho bruto de Agosto: '));
let ganho9 = parseFloat(prompt('Digite o ganho bruto de Setembro: '));
let ganho10 = parseFloat(prompt('Digite o ganho bruto de Outubro: '));
let ganho11 = parseFloat(prompt('Digite o ganho bruto de Novembro: '));
let ganho12 = parseFloat(prompt('Digite o ganho bruto de Dezembro: '));

let ganhoSoma = parseFloat(ganho1 + ganho2 + ganho3 + ganho4 + ganho5 + ganho6 + ganho7 + ganho8 + ganho9 + ganho10 + ganho11 + ganho12);

let gasto1 = parseFloat(prompt('Digite o gasto bruto de Janeiro: '));
let gasto2 = parseFloat(prompt('Digite o gasto bruto de Fevereiro: '));
let gasto3 = parseFloat(prompt('Digite o gasto bruto de Março: '));
let gasto4 = parseFloat(prompt('Digite o gasto bruto de Abril: '));
let gasto5 = parseFloat(prompt('Digite o gasto bruto de Maio: '));
let gasto6 = parseFloat(prompt('Digite o gasto bruto de Junho: '));
let gasto7 = parseFloat(prompt('Digite o gasto bruto de Julho: '));
let gasto8 = parseFloat(prompt('Digite o gasto bruto de Agosto: '));
let gasto9 = parseFloat(prompt('Digite o gasto bruto de Setembro: '));
let gasto10 = parseFloat(prompt('Digite o gasto bruto de Outubro: '));
let gasto11 = parseFloat(prompt('Digite o gasto bruto de Novembro: '));
let gasto12 = parseFloat(prompt('Digite o gasto bruto de Dezembro: '));

let gastoSoma = parseFloat(gasto1 + gasto2 + gasto3 + gasto4 + gasto5 + gasto6 + gasto7 + gasto8 + gasto9 + gasto10 + gasto11 + gasto12);

let saldo = ganhoSoma - gastoSoma
console.log('O saldo da empresa foi de: ' + saldo)

if (saldo < 0) {
    console.log('A empresa teve prejuízo.')
} else {
    console.log('A empresa teve lucro!')
}

*/

/* Exercicio 4
Crie um algoritmo que solicite ao usuário quatro valores inteiros
e os exiba em ordem decrescente.  
Dica: pesquise sobre o uso de arrays e a função `sort()`.


let numeros = [];

for (let i = 0; i < 4; i++) {
  let valor = parseInt(prompt("Digite um número inteiro:"));
  numeros.push(valor);
}

numeros.sort((a, b) => b - a);

console.log('Ordem decrescente: ' + numeros.join(', '));

*/


/* Exercício 5
Crie um algoritmo que peça um número ao usuário. Se o número for par,
transforme-o em ímpar. Se for ímpar, transforme-o em par.  
Dica: utilize o operador `%` para identificar se o número é par ou ímpar.


let n = parseFloat(prompt('Digite um número: '))

if (n % 2 === 0) {
    console.log('Este número é ímpar.')
} else {
    console.log('Este número é par.')
}

*/

/* Exercício 6
Crie um algoritmo que leia uma letra digitada pelo usuário e informe 
se ela é uma vogal ou uma consoante.  
Dica: utilize `if` ou `switch` e arrays para armazenar as vogais.



let letra = prompt('Digite uma letra:').toLowerCase();

let vogais = ['a', 'e', 'i', 'o', 'u'];

if (vogais.includes(letra)) {
    console.log('É uma vogal.');
} else {
    console.log('É uma consoante.');
}

*/

/* Exercício 7
Desenvolva um algoritmo para uma picoleteria. 
Ao selecionar um sabor, o programa deve exibir o valor do picolé. 
Os sabores e preços são:  
- Chocolate: R$1,50  
- Morango: R$2,50  
- Creme: R$2,50  
- Manga: R$3,20  
- Melancia: R$3,40  
- Vanilla Ice: R$3,00  
- Céu Azul: R$3,60  
- Brownie: R$4,00  
- Hawaiano: R$5,00  



let sabor = prompt('Digite o sabor do picolé:').toLowerCase();

let tabelaPrecos = {
  'chocolate': 1.50,
  'morango': 2.50,
  'creme': 2.50,
  'manga': 3.20,
  'melancia': 3.40,
  'vanilla ice': 3.00,
  'céu azul': 3.60,
  'brownie': 4.00,
  'hawaiano': 5.00
};

if (sabor in tabelaPrecos) {
  console.log('O valor do picolé de ' + sabor + ' é R$' + tabelaPrecos[sabor].toFixed(2));
} else {
  console.log('Sabor não encontrado.');
}

*/

/* Exercício 8
Crie um algoritmo que sorteie um número aleatório de 1 a 100 
e peça para o usuário tentar adivinhá-lo.
O programa deve informar se o palpite está acima ou abaixo do valor 
sorteado até que ele acerte.  
Dica: use `Math.random()` e `Math.floor()`.


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
  palpite = parseInt(prompt('Tente adivinhar o número entre 1 e 100:'));

  if (palpite > numeroSecreto) {
    console.log('O número é menor.');
  } else if (palpite < numeroSecreto) {
    console.log('O número é maior.');
  } else {
    console.log('Parabéns! Você acertou!');
  }

} while (palpite !== numeroSecreto);

/*

/* Exercício 9
Desenvolva um algoritmo que peça ao usuário para digitar uma frase e, ao final, 
exiba quantas vogais existem nessa frase.



let frase = prompt('Digite uma frase:');
let vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (vogais.includes(frase[i].toLowerCase())) {
    contador++;
  }
}

console.log('Quantidade de vogais:', contador);

*/

/* Exercício 10
Crie um programa que solicite uma senha ao usuário. 
A senha deve conter no mínimo 8 caracteres, com pelo menos uma 
letra maiúscula, uma minúscula e um número. 
Ao final, informe se a senha é válida ou não.



let senha = prompt('Digite a senha:');
let maiuscula = /[A-Z]/;
let minuscula = /[a-z]/;
let numero = /[0-9]/;
let valido = false;

if (senha.length >= 8 && maiuscula.test(senha) && minuscula.test(senha) && numero.test(senha)) {
  valido = true;
}

if (valido) {
  console.log('Senha válida!');
} else {
  console.log('Senha inválida! A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula e um número.');
}

*/

/* Exercício 11
Peça ao usuário para digitar um número e mostre a 
tabuada desse número de 1 a 10.  
Dica: utilize laços de repetição para construir a tabuada.



let numero = parseFloat(prompt('Digite um número:'));

for (let i = 1; i <= 10; i++) {
  console.log(numero * i);
}

*/

/* Exercício 12
Crie um algoritmo que permita ao usuário cadastrar produtos 
informando o nome e o preço. Após o cadastro de pelo menos 5 produtos, 
exiba a lista de produtos com seus respectivos preços 
e o valor total do carrinho.  
Dica: use arrays e objetos.



let produtos = [];
let total = 0;

for (let i = 0; i < 5; i++) {
  let nome = prompt('Digite o nome do produto:');
  let preco = parseFloat(prompt('Digite o preço do produto:'));
  produtos.push({ nome, preco });
  total += preco;
}

console.log('Lista de produtos:');
for (let produto of produtos) {
  console.log(`${produto.nome}: R$ ${produto.preco.toFixed(2)}`);
}

console.log(`Valor total do carrinho: R$ ${total.toFixed(2)}`);

*/