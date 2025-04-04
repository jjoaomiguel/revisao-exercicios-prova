/* Exercício 1
Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. 
A cada novo número digitado, o valor deve ser acumulado. 
Ao final, exiba o resultado total da soma.

*/
let n = parseFloat (prompt('Quantos números você deseja somar?'));
let soma = 0;

    for (let i = 0; i < n; i++) {
        let pergunta = parseFloat (prompt ('Digite um número: '));
        soma = pergunta + soma;
    }
console.log('A soma é: ' + soma)




/* Exercício 2
Simule uma contagem regressiva para o lançamento de um foguete, 
partindo de 10 até 0, e ao final exiba a mensagem "Lançamento!".

*/
