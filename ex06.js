const prompt = require("prompt-sync")();

function media(){
    let n1 = parseInt(prompt("Digite um número: "));
    let n2 = parseInt(prompt("Digite outro número: "));
    let n3 = parseInt(prompt("Digite mais um  número: "));

    let resultado = ((n1 + n2 + n3) / 3).toFixed(2);

    console.log("A média é igual a: " , resultado);
}

media()

