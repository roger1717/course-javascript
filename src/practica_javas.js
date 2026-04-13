// gestionando una línea de ensamblaje de motores ...

const motores = [
    { id: "MOT-01", temperatura: 65 },
    { id: "MOT-02", temperatura: 85 },
    { id: "MOT-03", temperatura: 70 },
    { id: "MOT-04", temperatura: 92 }
];

function analizar_produccion(lista) {
    let motorescalientes = []
    let sumatotal = []

    for(const motor of lista) {
        sumatotal += motor.temperatura;

        // Logica de filtrado y modificacion
        if (motor.temperatura > 80) {
            motorescalientes.push(motor.id);
            motor.estado = "PELIGRO";
        } else{
            motor.estado = "OK"; 
        }
    }

    let promedio = sumatotal/lista.length;

    return {
        alerta : motorescalientes,
        media : promedio.toFixed(1),
        datosactualizados : lista
    };
}

// Ejecución
const resultado = analizar_produccion(motores);

console.log("Motores en alerta:", resultado.alerta);
console.log("Promedio de temperatura:", resultado.media);
console.log("Lista actualizada:", resultado.datosactualizados);





// Gestion de academias online. 

const estudiantes = [
    { nombre: "Laura", puntuacion: 95, temas: ["Python", "SQL"] },
    { nombre: "Camilo", puntuacion: 55, temas: ["JavaScript", "HTML"] },
    { nombre: "Andrés", puntuacion: 82, temas: ["React", "Node"] },
    { nombre: "Elena", puntuacion: 40, temas: ["Java", "Docker"] }
]; 

function procesarestudiantes(listado) {
    let estudiantemal = [];
    let sumatotal = 0;
    
    for(const estudiante of listado) {
        sumatotal += estudiante.puntuacion; 

        if (estudiante.puntuacion < 60){
            estudiantemal.push(estudiante.nombre);
            estudiante.estado2 = "Reprobado";
        }

        else if (estudiante.puntuacion >60 && estudiante.puntuacion <89){
            estudiante.estado2 = "Aprobado"
        }
        else {
        estudiante.estado2 = "Ecxelente";
        }
    }

    let sumatoria = sumatotal / listado.length;

    return {
        estudiante_nota_baja : estudiantemal,
        promedioglobal : sumatoria.toFixed(2),
        listado_detallado : listado
    };
}

const resultado2 = procesarestudiantes(estudiantes);

console.log("estudiantes que necesitan tutoria : ", resultado2.estudiante_nota_baja);
console.log("promedio del curso : ", resultado2.promedioglobal);
console.table(resultado2.listado_detallado); 