
# Encontrar numeros positivos y negativos 

lista = [10, -5, 0, 22, -1, 8]


def encontrar_numeros (lista):

    numeros_positivos = []
    numeros_negativos = []

    for i in lista :
        if i > 0 :
            numeros_positivos.append(i)
        elif i< 0 : 
            numeros_negativos.append(i)

    return numeros_positivos,numeros_negativos

resultado = encontrar_numeros(lista)
print (f"numeros encontrados : {resultado}")


# Encontrar precios 

precios = [120, -5, 45, 0, 80, 10, 50, -10, 200]

def analizar_precios(precios):
    premium = []
    standard = []
    errores = 0 

    for x in precios:
        if x > 50 :
            premium.append(x)
        elif x >= 1 and x <= 50:
            standard.append(x)
        else:
            errores += 1
            
    if len(premium) > 0 :
        # round limita decimales y 2 Muestra solo dos decimales
        promedio_p = round(sum(premium)/len(premium),2 )  
    else :
        promedio_p: 0 

    return premium,standard,errores,promedio_p

p_alta, p_baja, conteo_errores, prom_p = analizar_precios(precios)

print(f"productos premium : {p_alta}")
print(f"Media de productos premium : {p_alta }")
print(f"productos Estandard : {p_baja}")
print(f"cantidad errores  : {conteo_errores}")

print(f"PROMEDIO PREMIUM  : {prom_p}")


# Encontrar motores en fallo 

lecturas = {
    "Sensor_A": 45,
    "Sensor_B": 82,
    "Sensor_C": 68,
    "Sensor_D": 95,
    "Sensor_E": 50
} 

def monitorear_sensores(datos):
    sensores_alerta = []
    sensores_normal = []

    for nombre,temperatura in datos.items():
        if temperatura > 70:
            sensores_alerta.append(nombre)
        else :
            sensores_normal.append(nombre)

    total_sensores = len(datos)
    if total_sensores > 0:
        promedio_temp = round(sum(datos.values())/ total_sensores,1) 
    else:
        promedio_temp = 0 

    return sensores_alerta,sensores_normal,promedio_temp

sens_alerta,sens_norm,prom_t = monitorear_sensores(lecturas)

print(f"temperaturas elevadas : {sens_alerta}")
print(f"temperaturas normales : {sens_norm}")
print(f"promedio de temperaturas : {prom_t}")



#  Listado de motores obtenido por el id , motores con aceite bajo
#  En diccionarios se usa clave valor no posiciones como las listas [2]
motores = [
    {"id": "M1", "aceite": 85},
    {"id": "M2", "aceite": 15},
    {"id": "M3", "aceite": 50},
    {"id": "M4", "aceite": 10}
]

def motores_analizados (lista_motores):
    motores_bajos = []
    
    for motor in lista_motores:
        if motor["aceite"] < 20:
            motores_bajos.append(motor["id"])
    return motores_bajos
    
niveles_bajos = motores_analizados(motores)
print(f"Motores con aceite bajo : {niveles_bajos}")


# control de aduanas , productos que costaron mas de 100 USD


pedidos = [
    {"producto": "Filtros Industriales", "precio": 150, "estado": "revisado"},
    {"producto": "Sensores de Flujo", "precio": 80, "estado": "pendiente"},
    {"producto": "Válvulas de Presión", "precio": 200, "estado": "revisado"},
    {"producto": "Empaques de Neopreno", "precio": 30, "estado": "pendiente"},
    {"producto": "Cojinetes de Acero", "precio": 120, "estado": "revisado"}
]

def gestionar_aduana (lista_pedidos):
    productos_costosos = []
    costo_total = 0
    pendientes = 0 

    for item in lista_pedidos:

        costo_total += item["precio"]

        if item["precio"] >= 100:
            productos_costosos.append(item["producto"])
    
        if item ["estado"] == "pendiente":
            pendientes +=1
      
    return productos_costosos,costo_total,pendientes
    
costosos,totales,cant_pendientes = gestionar_aduana(pedidos)
print(f"productos que exeden lo permitido : {costosos}")
print(f"valor total de carga : {totales}")
print(f"pedidos por revisar : {cant_pendientes}")







colaboradores = [
    {"nombre": "Yeferson", "horas": 45, "pago_hora": 20, "depto": "Sistemas"},
    {"nombre": "Maria", "horas": 35, "pago_hora": 25, "depto": "Diseño"},
    {"nombre": "Juan", "horas": 50, "pago_hora": 15, "depto": "Sistemas"},
    {"nombre": "Ana", "horas": 40, "pago_hora": 30, "depto": "Marketing"}
]

def analizar_nomina(lista):
    nomina_total = 0
    equipo_sistemas = []

    for persona in lista:
        # 1. Calcular el pago bruto inicial
        pago_bruto = persona["horas"] * persona["pago_hora"]

        # 2. Verificar si trabajó más de 40 horas para el BONO
        if persona["horas"] > 40:
            pago_bruto = pago_bruto * 1.15
            persona["Bono Aplicado"] = True
        else:
            persona["Bono Aplicado"] = False

        if persona["depto"] == "Sistemas":
            equipo_sistemas.append(persona["nombre"])

        nomina_total += pago_bruto

    return pago_bruto,nomina_total,lista
    

# Ejecución
sistemas, total, reporte = analizar_nomina(colaboradores)

print(f"Colaboradores de Sistemas: {sistemas}")
print(f"Total a pagar en nómina: ${total}")