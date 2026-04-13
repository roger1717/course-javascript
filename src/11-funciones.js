 // funciones

 function saludar (nombre) {
    return `Hola ,${nombre}`; 
 }

 const mensaje = saludar ('oscar');
 const mensaje2 = saludar ('pepa');
 console.log(mensaje); 
 console.log(mensaje2);

 // parametros y Argumentos
 // parametros nombre,edad 

 function crearusuario ( nombre, edad ) {
    return {nombre,edad};
 }

 // argumentos : valores que vamos a pasar al momento de llamar la funcion. 

 const usuario = crearusuario("ana", 35);
 console.log(usuario); 


 // arrow functions
 const multiplicar = (a,b) => a*b; 
 console.log(multiplicar(4,5)); 

 // 
 const crearnota = (contenido,titulo = 'sin titulo') => {
    return{
        titulo,
        contenido,
        creado : Date.now()
    }
 }

 const nota1 = crearnota("mi contenido");
 const nota2 = crearnota("otro contenido" , "minota");
 
 console.log(nota1);
 console.log(nota2); 