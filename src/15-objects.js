
// Objetos

// coleccion de claves par y valor

const nota = {
    id:1,
    title: 'mi primera nota',
    content: 'contenido de la nota',
    createdAt: Date.now(),
    edad: 13,
    esadmin: true,
};

console.log(nota.id);
console.log(nota.title); 

const campo = 'content';
console.log(nota[campo]);   //acceso de otra manera al valor


const nota2 = {
    id:1,
    title: 'mi primera nota',
    content: 'contenido de la nota',
    createdAt: Date.now(),
    edad: 13,
    esadmin: true,
};
// destructurar
// const {title,content} = nota2;    se puede de esta manera o renombrarlo
const id = nota2.id;
const title = nota2.title;
const {title:titulo,content:contenido} = nota2;  //renombrarlo



const nota3 = {id:2, title: 'Hola'};
const data = { esadmin: true};
const copia = { ...nota3};    // creamos la copia un la misma info ...

console.log(nota3);
console.log(copia);

const notaActualizada = {
    ...nota3,
    ...data,
    edad:18

}

console.log(notaActualizada)


const nota4 ={
    id:4,
    title: 'Mi cuarta nota',
    content : 'Contenido de nota 4',
    createdAt: Date.now(),
};
console.log('title' in nota4);

// object.keys
console.log(Object.keys(nota4));

// objetct.values
console.log(Object.values(nota4));

// object.entries
console.log(Object.entries(nota4));