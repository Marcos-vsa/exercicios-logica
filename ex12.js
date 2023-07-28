const lista = [1,0,10,-20,30]

let maior = lista[0];
let menor = lista[0];

for(let i = 0; i < lista.length; i++){
    if(lista[i] > maior){
        maior = lista[i]
    }
    if(lista[i] < menor){
        menor = lista[i]
    }
}

console.log(maior, menor)