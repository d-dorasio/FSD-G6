# from cuenta import *
# from tarjetas import *
# from cliente import *


# # Crear instancias de las subclases
# cliente1 = Gold("Juan", "Pérez", "123456789", "12345678")
# cliente2 = Classic("María", "González", "987654321", "87654321")
# cliente3 = Black("Carlos", "Rodríguez", "555555555", "11111111")

# # Acceder a los atributos y métodos de los clientes
# print(f"{cliente1.nombre} es un cliente de tipo {type(cliente1).__name__}")
# print(f"Límite de retiro diario para {cliente1.nombre}: {cliente1.obtener_limite_retiro_diario()}")
# print("---------")
# print(f"{cliente2.nombre} es un cliente de tipo {type(cliente2).__name__}")
# print(f"Límite de retiro diario para {cliente2.nombre}: {cliente2.obtener_limite_retiro_diario()}")
# print("---------")
# print(f"{cliente3.nombre} es un cliente de tipo {type(cliente3).__name__}")
# print(f"Límite de retiro diario para {cliente3.nombre}: {cliente3.obtener_limite_retiro_diario()}")

# # Crear cuentas y tarjetas 
# cuenta1 = CajaAhorroPeso()
# cuenta2 = CajaAhorroDolares()
# tarjeta1 = Tarjeta("Mastercard", "Gold")
# tarjeta2 = Tarjeta("VISA", "Gold")

# # Agregar cuentas y tarjetas al cliente
# cliente1.agregar_cuenta(cuenta1)
# cliente1.agregar_cuenta(cuenta2)
# cliente1.agregar_tarjeta(tarjeta1)
# cliente1.agregar_tarjeta(tarjeta2)

# # Acceder a las cuentas y tarjetas del cliente
# print("---------")
# print(f"-Cuentas de {cliente1.nombre}:")
# for cuenta in cliente1.cuentas:
#     print(cuenta.tipo_cuenta)

# print(f"-Tarjetas de {cliente1.nombre}:")
# for tarjeta in cliente1.tarjetas:
#     print(f"{tarjeta.tipo_tarjeta} - Nivel {tarjeta.nivel}")

from cliente import *

#crear un cliente
cliente1= Classic("Fulanito","Perez","001","12345678")

print(cliente1)# Cliente Classic nuevo: Fulanito Perez, 12345678

#crear las cuenta del cliente
cliente1.crearCuenta("Caja de ahorro en pesos") # * Cuenta Caja de ahorro en pesos creada
cliente1.crearCuenta("Caja de ahorro en dolares") # * Cuenta Caja de ahorro en dolares creada con un cargo mensual de 10000

cliente1.verCuentas()
"""
Terminal:
- Cuentas de Fulanito Perez:
Tipo de cuenta: Caja de ahorro en peso
Tipo de cuenta: Caja de ahorro en dólares
"""

#crear las tarjetas del cliente
cliente1.crearTarjetaDebito("VISA")# * Tarjeta de VISA creada
cliente1.crearTarjetaDebito("AMEX")# * Tarjeta de AMEX creada

cliente1.verTarjetas()
"""
Terminal:
- Tarjetas de Fulanito Perez:
Tarjeta de Debito, Marca VISA con límite de 10000
"""
