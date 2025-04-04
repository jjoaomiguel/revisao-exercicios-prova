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



let i = 10

function lançamento (i) {
    while (i < 0) {
        let subtracao = i - 1
        console.log(subtracao)
    }
    console.log('LANÇAMENTO')
}

lançamento (i)

*/

/* Exercicio 3
Crie um algoritmo que solicite o ganho bruto e os gastos mensais de uma empresa durante os 12 meses do ano.
Ao final, exiba:  
- Total de ganhos  
- Total de gastos  
- Saldo final  
- E uma mensagem informando se a empresa teve lucro ou prejuízo no ano
*/



/* Exercicio 4
Crie um algoritmo que solicite ao usuário quatro valores inteiros
e os exiba em ordem decrescente.  
Dica: pesquise sobre o uso de arrays e a função `sort()`.

*/

