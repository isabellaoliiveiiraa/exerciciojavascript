let prompt = require('prompt-sync')();

let valorConta = parseFloat(prompt('Digite o valor da conta: R$ '));
let satisfacao = prompt('Qual o nível de satisfação (bom, ótimo, excelente)? ').toLowerCase();

let porcentagemGorjeta;

if (satisfacao === 'bom') {
    porcentagemGorjeta = 0.10; // 10% para bom
} else if (satisfacao === 'ótimo') {
    porcentagemGorjeta = 0.15; // 15% para ótimo
} else if (satisfacao === 'excelente') {
    porcentagemGorjeta = 0.20; // 20% para excelente
} else {
    console.log('Nível de satisfação inválido! Considerando "bom".');
    porcentagemGorjeta = 0.10; // Caso o usuário forneça uma entrada inválida, consideramos "bom"
}

let gorjeta = valorConta * porcentagemGorjeta;
let valorTotal = valorConta + gorjeta;

console.log(`Valor da conta: R$ ${valorConta.toFixed(2)}`);
console.log(`Gorjeta (${porcentagemGorjeta * 100}%): R$ ${gorjeta.toFixed(2)}`);
console.log(`Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`);