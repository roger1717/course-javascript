// sentencias switch     permite elegir cual condicion quiero para ejecutar.

switch(expresion) {
    case valor1:
        // codigo a ejecutar
        break;
    case valor2:
        // codigo a ejecutar
        break;
    default:
        // codigo a ejecutar
        break;
}

const dia = 'lunes';

switch(dia) {
    case 'lunes':
        console.log('Hoy es lunes');
        break;
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log('Dia de trabajo');
        break;
    case 'sabado':
    case 'domingo':
        console.log('Fin de semana');
        break;
    default:
        console.log('Dia no valido');
        break;
}