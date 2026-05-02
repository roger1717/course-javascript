
// metodos de orden superior

// funciones que reciben otra funcion, que expresa de forma declarativa el que

const notas = [
    { id: 1, title: 'Nota 1', content:'contenido uno',esfavorita: true,},
    { id: 2, title: 'Nota 2', content:'contenido dos',esfavorita: false,},
    { id: 3, title: 'Nota 3', content:'contenido tres',esfavorita: true,},
];

const favoritas = notas.filter((nota) => nota.esfavorita);
console.log(favoritas); 

const titulos = notas.filter((nota) => nota.title.toLocaleLowerCase().includes('nota 1'));