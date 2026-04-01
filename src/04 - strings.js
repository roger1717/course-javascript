const nombre ='javascript';
const version = 'eS6';

console.log(nombre,version);

// Concatenar el texto
 
// const mensaje ='Bienvenido a' + nombre + 'version'+ version;

// template literals

const mensaje2 = `bienvenido al curso de ${nombre}, en la version ${version}`;
console.log(mensaje2);

// Expresiones 
const precio = 100;
const cantidad = 3;
const total = `total: ${precio * cantidad}`; 
console.log(typeof total); 

//multilinea
const texto = "hola mundo";
console.log(texto.length)

//slicer
const texto1 = "Javascript es increible";
console.log(texto1.slice(0,10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));