//for - while - do while

//for  cuando sabes cuantas veces repetir
// while cuando no sabes cuantas veces se requiere repetir pero tiene la condicion
// do while : se ejecuta almenos una vez
// for of : para recorrer arrays y strings
// for in : para recorrer propiedades de objetos

// for (inicializacion,condicion,incremento) { }

for (let i = 0; i < 5; i++) {
    console.log(i);
}

const notas = ['nota 1','nota 2','nota 3'];   // array 
for (let i = 0 ; i < notas.length; i++) {
    console.log(`indice ${i} : ${notas[i]}`)
}

// for of
const frutas = ['manzana','banana','cereza'];
for (const fruta of frutas) {
    console.log(fruta);
    if (fruta === 'banana') {
    console.log("que rica fruta es esa");
    }
} 

// for in               funciona para objetos
const persona = {
    nombre: 'Juan',
    edad: 20,
    ciudad: 'Madrid'
}
for (const key in persona) {
    console.log(`${key} : ${persona[key]}`)
}


// while
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;        //agregar un incremento para que no se quede en un bucle infinito
}

