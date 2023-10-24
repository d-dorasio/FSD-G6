
def calcular_monto_total(precio_dolar, monto):
    impuesto_pais = 0.3  # Impuesto país del 30%
    ganancias = 0.1  # Impuesto a las ganancias del 10%
    
    monto_impuestos = monto * (impuesto_pais + ganancias)
    monto_total = monto + monto_impuestos
    return monto_total

def descontar_comision(monto, comision_porcentaje):
    comision = (comision_porcentaje / 100) * monto
    monto_descontado = monto - comision
    return monto_descontado

def calcular_monto_plazo_fijo(monto, tasa_interes):
    monto_interes = monto * (tasa_interes / 100)
    monto_total = monto + monto_interes
    return monto_total


# Pruebas unitarias
print("Pruebas unitarias:")

# Prueba de calcular_monto_total
precio_dolar = 10
monto = 1000
resultado = calcular_monto_total(precio_dolar, monto)
print(f"El monto total es: {resultado}")

# Prueba de descontar_comision
monto = 1000
comision_porcentaje = 5
resultado = descontar_comision(monto, comision_porcentaje)
print(f"El monto descontado es: {resultado}")

# Prueba de calcular_monto_plazo_fijo
monto = 1000
interes_porcentaje = 3
resultado = calcular_monto_plazo_fijo(monto, interes_porcentaje)
print(f"El monto con interés es: {resultado}")