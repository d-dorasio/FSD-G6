from cliente import *

# Crear un cliente de tipo Classic
cliente_classic = Classic("Juan", "Perez", "001", "12345678")
print(cliente_classic)
# Crear una caja de ahorro en pesos
cliente_classic.crearCuentaAhorroPesos()
# Crear una caja de ahorro en dólares
cliente_classic.crearCuentaAhorroDolares()
# Crear una tarjeta de débito
cliente_classic.crearTarjetaDebito("AMEX")
# Realizar retiros en efectivo
print("Intento de retiro 1:")
cliente_classic.realizarRetiroEfectivo(2000)  # Primer retiro de $2000
print("Intento de retiro 2:")
cliente_classic.realizarRetiroEfectivo(2000)  # Segundo retiro de $2000
print("Intento de retiro 3:")
cliente_classic.realizarRetiroEfectivo(2000)  # Tercer retiro de $2000
print("Intento de retiro 4:")
cliente_classic.realizarRetiroEfectivo(2000)  # Cuarto retiro de $2000
print("Intento de retiro 5:")
cliente_classic.realizarRetiroEfectivo(2000)  # Quinto retiro de $2000
print("Intento de retiro 6:")
cliente_classic.realizarRetiroEfectivo(2000)  # Intento de retiro después del límite de 5
#Realizar transferencias
cliente_classic.realizarTransferenciaSaliente(10000)  
cliente_classic.realizarTransferenciaEntrante(2000)  

#//////////////////////////////////////////////////////////////////////////////////////
# Crear un cliente de tipo Gold
cliente_gold = Gold("Ana", "Gómez", "002", "87654321")
print(cliente_gold)
# Crear cajas de ahorro
cliente_gold.crearCajaAhorro("pesos")
cliente_gold.crearCajaAhorro("dolares")
# Crear una cuenta corriente
cliente_gold.crearCuentaCorriente()
# Crear tarjetas
cliente_gold.crearTarjeta("VISA")
cliente_gold.crearTarjeta("MASTER")
#Agregar extension
cliente_gold.agregarExtensionTarjeta("VISA")
# Realizar retiros en efectivo
print("Intento de retiro 1:")
cliente_gold.realizarRetiroEfectivo(10000)  
print("Intento de retiro 2:")
cliente_gold.realizarRetiroEfectivo(20000) 
print("Intento de retiro 3:")
cliente_gold.realizarRetiroEfectivo(25000)  
# Realizar transferencias
cliente_gold.realizarTransferenciaSaliente(5000)  # Transferencia de $5,000
cliente_gold.realizarTransferenciaEntrante(1000)  # Transferencia de $1,000

#//////////////////////////////////////////////////////////////////////////////////////
# Crear un cliente de tipo Black
cliente_black = Black("Carlos", "López", "003", "654321")
print(cliente_black)
#Crear Tarjeta Debito
cliente_black.crearTarjetaDebito("AMEX")
# Crear cajas de ahorro
cliente_black.crearCajaAhorro("pesos")
cliente_black.crearCajaAhorro("dolares")
# Crear cuentas corrientes
cliente_black.crearCuentaCorriente()
# Crear tarjetas
cliente_black.crearTarjetaCredito("VISA")
cliente_black.crearTarjetaCredito("MASTER")
cliente_black.crearTarjetaCredito("AMEX")
cliente_black.crearTarjetaCredito("VISA")
cliente_black.crearTarjetaCredito("MASTER")
cliente_black.crearTarjetaCredito("AMEX")
#Agregar extension
cliente_black.agregarExtensionTarjeta("VISA")
# Realizar retiros en efectivo
print("Intento de retiro 1:")
cliente_black.realizarRetiroEfectivo(50000)
print("Intento de retiro 2:")
cliente_black.realizarRetiroEfectivo(100000) 
print("Intento de retiro 3:")
cliente_black.realizarRetiroEfectivo(150000) 
# Realizar transferencias
cliente_black.realizarTransferenciaSaliente(20000)  # Transferencia de $20,000
cliente_black.realizarTransferenciaEntrante(5000)  # Transferencia de $5,000