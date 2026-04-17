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

//slice    permite imprimir un sector especifico. 
const texto1 = "Javascript es increible";
console.log(texto1.slice(0,10));
console.log(texto1.slice(11));
console.log(texto1.slice(-6));

// substring     // No trabaja con negativos
const texto2 = "Hola a todos esto es javas";
console.log(texto2.substring(0,4));

// split         
const texto3 = "linea1 linea2 linea3";
const lineas = texto3.split(' ');   //usa un separador 
console.log(lineas)

//trim      Elimina espacios
const texto4 = "    hola mundo javascript    "
console.log(texto4.trim());   //quita espacios a ambos lados de la cadena
console.log(texto4.trimStart());   //quita espacios al inicio
console.log(texto4.trimend());   //quita espacios al final

// lowercase  &  uppercase
const texto5 = "javascript"
console.log(texto5.toLowerCase);
console.log(texto5.toUpperCase); 

//includes        para saber si dentro de la cadena existe cierto parametro
const texto6 = "aprende javascript desde cero"
console.log(texto6.includes('javascript'));

//startwith   para saber si una empieza o termina con una parametro
const texto7 = "esto es un documento .md"
console.log(texto7.startsWith('.md'))
console.log(texto7.endsWith('.md'));

//replace        permite reemplazar una parte del texto
const texto8 = "Hola mundo , esto es javascript"
console.log(texto8.replace('Hola','hi'))

//push           permite agregar datos a una constante
const texto9 = ['Enero']
texto9.push("Febrero");
texto9.push("Marzo");
console.log(texto9);

// unshift    permite agregar al inicio de la cadena. 
const texto10 = ['Enero'];
texto10.unshift("Diciembre 2025");
console.log(texto10);

// .pop();    permite eliminar el ultimo    y .shift()  eliminar el primero
const texto11 = ['Enero'];
texto10.pop("Diciembre 2025");
console.log(texto11);

// meses.splice(1, 0, "NuevoMes");  agrega o elimina en cualquier posición

const texto12 = "Hola a todos esto es pruebas"