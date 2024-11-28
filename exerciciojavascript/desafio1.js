
let prompt = require('prompt-sync')();

let numeroSecreto = 5;
let numero = parseFloat(prompt('Escolha um número de 1 a 10: '));

if (numero == numeroSecreto) {
    console.log("Você acertou!");
} else {
    console.log("Você errou! O número era " + numeroSecreto);
}