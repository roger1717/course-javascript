
// arrays 

const notas = ['nota1','nota2','nota3']   //array de strings
const numeros = [1,2,3,4,5,6,7]; 
const mixtos = [1,'texto',null,true,{id:1}];

//CRUD  
notas.push('nota4');   // modifica el original
console.log(notas);   

// unshift
notas.unshift('nota 0');
console.log(notas)

//splice
notas.splice(1,0,'Notas 1.2');
console.log(notas); 