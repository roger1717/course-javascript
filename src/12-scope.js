// scope

// una variable existe y puede usarse 

const global = 'soy global'; 

function ejemplo () {
    const funcion = 'Soy de funcion';

    if (true) {
        const bloque = 'soy de bloque';
        console.log(bloque);
    }
    
    console.log(funcion);
}

console.log(ejemplo());
console.log(global); 