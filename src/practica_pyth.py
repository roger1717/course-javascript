
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

