const prompt = require("prompt-sync")();

let temperatura = prompt("Digite a temperatura que deseja converter °C: ")

function conversaoTemperatura(temp){
    let conversao = (temp * 1.8 + 32).toFixed(2);
    console.log(`Temperatura em Fahrenheit: ${conversao}°`);
}

conversaoTemperatura(temperatura);