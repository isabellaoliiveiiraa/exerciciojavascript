let prompt = require('prompt-sync')();

let horaAtual = new Date().getHours();

let saudacao;

if (horaAtual >= 6 && horaAtual < 12) {
    saudacao = "Bom dia!";
} else if (horaAtual >= 12 && horaAtual < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

console.log(saudacao);