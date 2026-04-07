
texto = null   //Es un valor de asignación intencional

const ejemplo = texto
console.log(ejemplo)


const pruebav = variable
console.log(variable)

// Asincronia
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");

// Ejercicios for      suma todos los numeros de 1 a 100 
let suma = 0 ;
for(let i = 1; i <=100; i++) {
    suma += i ; 
}

console.log(`la suma es : ${suma}`); 

// dado un array de nombres saluda a cada persona
const nombres = ["ana","luis","carlos","marta"];
for (let nombre of nombres) {
console.log(`hola mi nombre es ${nombre}`);
}

// imprime los numeros pares del 2 al 20
let pares = 0;
for(let i = 2; i<=20; i++) {
    if (i % 2 === 0) 
        console.log(`numeros pares ${i}`)
}

// encontrar el numero mas grande de un array 
array = [12,34,56,78,54,32,13.25];

function encontrarmaximo(array) {
    let maximo = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maximo)
        maximo = array[i]; 
    }
    return maximo;
}  
console.log(encontrarmaximo(array));