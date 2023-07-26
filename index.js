let valorSolicitado = parseInt(prompt('Valor a sacar: '));

let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;
let valorSaque = valorSolicitado;

if (valorSolicitado <= 0 || valorSolicitado == '') {
    if (valorSolicitado <= 0) {
        console.log("Valor solicitado deve ser maior que zero");
    } else if (valorSolicitado == '') {
        console.log("Deve ser informado um valor");
    }
} else {
    console.log(`Valor solicitado ${valorSolicitado}`);
    notas50 = valorSaque / 50;
    console.log(`Serão dadas ${parseInt(notas50)} notas de 50`);
    valorSaque = valorSaque % 50;
    console.log(`Sobra ${valorSaque}`);

    notas10 = valorSaque / 10;
    console.log(`Serão dadas ${parseInt(notas10)} notas de 10`);
    valorSaque = valorSaque % 10;
    console.log(`Sobra ${valorSaque}`);

    notas10 = valorSaque / 5;
    console.log(`Serão dadas ${parseInt(notas5)} notas de 5`);
    valorSaque = valorSaque % 5;
    console.log(`Sobra ${valorSaque}`);

    notas10 = valorSaque / 1;
    console.log(`Serão dadas ${parseInt(notas10)} notas de 1`);
    valorSaque = valorSaque % 1;
    console.log(`Sobra ${valorSaque}`);

    console.log(`OBRIGADO POR USAR NOSSOS SERVIÇOS BANCÁRIOS!!!!!!`)
}
