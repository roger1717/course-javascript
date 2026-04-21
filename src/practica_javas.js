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



// Gestion inventario de alimentos
// arreglos con los nombres de los productos que pertenecen a la categoria. 


const inventario = [
    { nombre: "Leche", precio: 4.0, categoria: "Lácteos", estaVencido: false },
    { nombre: "Yogur", precio: 2.0, categoria: "Lácteos", estaVencido: true },
    { nombre: "Pan", precio: 1.5, categoria: "Panadería", estaVencido: false },
    { nombre: "Queso", precio: 10.0, categoria: "Lácteos", estaVencido: true },
    { nombre: "Manzana", precio: 0.8, categoria: "Frutas", estaVencido: false }
];

function procesarInventario(lista) {
    let nombresLacteos = [];
    let valorTotal = 0;

    for (const item of lista) {
        // 2. Filtrar por categoría "Lácteos" (Usa === para comparar texto)
        if (item.categoria === "Lácteos"){
            nombresLacteos.push(item.nombre);
        }
        // 3. Si estaVencido es true:
        if (item.estaVencido){
            item.precio = item.precio * 0.5;
            item.nombre= "OFERTA - " + item.nombre;  
        }
        //    - Multiplica el precio por 0.5
        valorTotal += item.precio;
        
    }

    return {
        soloLacteos: nombresLacteos,
        inventarioTotal: valorTotal.toFixed(2),
        listaFinal: lista
    };
}

const resultado = procesarInventario(inventario);
console.log("Productos Lácteos:", resultado.soloLacteos);
console.log("Costo Total Inventario:", resultado.inventarioTotal);
console.table(resultado.listaFinal);




// carrito automatico 

const carrito = [
    {nombre: "Monitor 4k", precio:300, cantidad:2, enviogratis:true},
    {nombre: "Mause gamer", precio:50, cantidad:2, enviogratis:false},
    {nombre: "Teclado Mecanico", precio:150, cantidad:1, enviogratis:false},
    {nombre: "Procesador i9", precio:300, cantidad:3, enviogratis:true},
    {nombre: "Procesador i10", precio:350, cantidad:2, enviogratis:true},
];

function procesarcarrito(productos){
    let pagaenvio = [];
    let compratotal = 0; 

    for (const itemcarro of productos){
        
        let subtotalItem = itemcarro.precio * itemcarro.cantidad;

        if (compratotal > 500){
            subtotalItem = subtotalItem * 0.90;
            itemcarro.nombre= "OFERTA - " + itemcarro.nombre;
            itemcarro.descuentoaplicado = true;
        }
        // revisar envio
        if (itemcarro.enviogratis === false) {
            pagaenvio.push(itemcarro.nombre);
        }
       
        compratotal += subtotalItem;

    }
    return{
        productosconenvio : pagaenvio,
        total_a_pagar: compratotal.toFixed(2),
        detallecarrito : productos
    };
}
const resultado = procesarcarrito(carrito);
console.log("productos que cobran envio: ", resultado.productosconenvio);
console.log("total final de la orden: " , "$" + resultado.total_a_pagar);
console.table(resultado.detallecarrito);  