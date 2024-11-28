let prompt = require('prompt-sync')();


let nome = prompt('Digite o nome do aluno');  
let nota1 = parseFloat(prompt('Digite a primeira nota'));
let nota2 = parseFloat(prompt('Digite a segunda nota'));
let nota3 = parseFloat(prompt('Digite a terceira nota'));
let nota4 = parseFloat(prompt('Digite a quarta nota'));

let media = (nota1 + nota2 + nota3 + nota4) / 4;
let situacao;

if (media >= 7) {
    situacao = 'aprovado';
} else if (media >= 5) {
    situacao = 'recuperacao';
} else {
    situacao = 'reprovado';
}

console.log(
    'Aluno: ' + nome + '\nMédia: ' + media.toFixed(2) + '\nSituação: ' + situacao  
);
