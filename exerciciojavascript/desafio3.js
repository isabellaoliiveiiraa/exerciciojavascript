let prompt = require('prompt-sync')();

let ano = parseInt(prompt('Digite um ano:'));

function verificarBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

if (verificarBissexto(ano)) {
    console.log('O ano é bissexto!');
} else {
    console.log('O ano não é bissexto');
}
