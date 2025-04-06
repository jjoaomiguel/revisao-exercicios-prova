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

*/

/* Exercício 5
Crie um algoritmo que peça um número ao usuário. Se o número for par,
transforme-o em ímpar. Se for ímpar, transforme-o em par.  
Dica: utilize o operador `%` para identificar se o número é par ou ímpar.

*/

let n = parseFloat(prompt('Digite um número: '))

if (n % 2 === 0) {
    console.log('Este número é ímpar.')
} else {
    console.log('Este número é par.')
}