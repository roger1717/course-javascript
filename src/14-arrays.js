
// arrays 

const notas = ['nota1','nota2','nota3']   //array de strings
const numeros = [1,2,3,4,5,6,7]; 
const mixtos = [1,'texto',null,true,{id:1}];

//CRUD  
// push permite agregar un elemento al final. 
notas.push('nota4');   // modifica el original
console.log(notas);   

// unshift   permite agregar al inicio del array
notas.unshift('nota 0');
console.log(notas)

//splice
notas.splice(1,0,'Notas 1.2');   //1 es la posicion donde se va a agregar
console.log(notas);              // 0 es para agregar , 1 para borrar lo que este en esa posicion.

//leer (read) 
console.log([notas[0]]);
console.log([notas[1]]); 
console.log(notas.length);    // Muestra la cantidad de elementos dentro del array.


//Actualizar 

const notas2 = ['nota1','nota2']
notas2[1] = 'Notota1';
console.log(notas2); 

notas2.splice(2,0, 'Nota4');
console.log(notas2);

// Delete  (Eliminar)
const notas3 = ['notas1','notas2'];
console.log(notas3.pop()); 
console.log(notas3); 

console.log(notas3.push('notas3'))
console.log(notas3);

console.log(notas3.shift());
console.log(notas3); 
