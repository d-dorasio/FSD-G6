from cuenta import *
from tarjeta import *

class Cliente:
    def __init__(self, nombre, apellido, numero, dni):
        self.nombre = nombre
        self.apellido = apellido
        self.numero = numero
        self.dni = dni

"""
    METODOS:
    depositar
    retirar
    consultarSaldo
    transferir
"""

#////////////////////////////////// 
class Black(Cliente):
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
    
    def __str__(self):
        return f"Cliente Black nuevo: {self.nombre} {self.apellido}, {self.dni}."
    
#//////////////////////////////////
class Gold(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
    
    def __str__(self):
        return f"Cliente Gold nuevo: {self.nombre} {self.apellido}, {self.dni}"

#//////////////////////////////////
class Classic(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
        self.cuentasBlack=[]
        self.tarjetasBlack=[]
    
    def __str__(self):
        return f"Cliente Classic nuevo: {self.nombre} {self.apellido}, {self.dni}"
    
    #/////Cuenta/////
    def crearCuenta(self, tipoCuenta):
        if tipoCuenta == "Caja de ahorro en pesos":
            nueva_cuenta = CajaAhorroPesos()
            print(f" * Cuenta {tipoCuenta} creada")
            return self.agregarCuenta(tipoCuenta)
        elif tipoCuenta == "Caja de ahorro en dolares":
            nueva_cuenta=CajaAhorroDolares()
            cargoMensual = 10 #cargo hipotetico 
            print(f" * Cuenta {tipoCuenta} creada con un cargo mensual de {cargoMensual}$")
            return self.agregarCuenta(tipoCuenta)
        else:
            print("Error al crear cuenta")
    
    def agregarCuenta(self, cuenta):
        self.cuentasBlack.append(cuenta) #self.cuentas es del __init__

    def verCuentas(self):
        print(f"- Cuentas de {self.nombre} {self.apellido}:")
        for cuenta in self.cuentasBlack:
            print(cuenta)

    #/////Tarjeta/////
    def crearTarjetaDebito(self,marca):
        if (marca == "VISA" or marca == "MASTER" or marca == "AMEX"):
            nuevaTarjeta=Tarjeta( "Debito", marca, 10000)
            print(f" * Tarjeta de {marca} creada")
            return self.agregarTarjeta(nuevaTarjeta)
        else:
            print("Error al crear tarjeta")

    def agregarTarjeta(self, tarjeta):
        self.tarjetasBlack.append(tarjeta)
  
    def verTarjetas(self):
        print(f"- Tarjetas de {self.nombre} {self.apellido}:")
        for tarjeta in self.tarjetasBlack:
            print(tarjeta)
    

'''
Clientes Classic 
-	Una tarjeta de débito. (class Tarjeta) ---> CHECK
-	Caja de ahorro en pesos. (class Cuenta) ---> CHECK
-	Opcionalmente, caja de ahorro en dólares con cargo mensual. (class Cliente) ---> CHECK (ponele)
-	Hasta 5 retiros de dinero en efectivo sin comisiones, luego se aplica una tarifa. 
    El límite diario de retiro es de $10,000 por cajero. (class Tarjeta)
-	No tienen acceso a tarjetas de crédito. (class Cliente) --> CHECK (ponele)
-	Comisión del 1% por transferencias salientes y 0.5% por transferencias entrantes. (class Cliente)

Clientes Gold 
-	Una tarjeta de débito.
-	Hasta 2 cajas de ahorro y una cuenta corriente sin cargos adicionales. Se aplica un cargo mensual extra por cajas de ahorro en dólares adicionales.
-	Tarjetas VISA y/o Mastercard con hasta 5 extensiones cada una, con límites de $150,000 en un pago y $100,000 en cuotas.
-	Máximo de $20,000 en retiros diarios sin comisiones. Retiros ilimitados sin costo mensual.
-	Acceso a cuentas de inversión.
-	Posibilidad de tener una chequera.
-	Comisión del 0.5% por transferencias salientes y 0.1% por transferencias entrantes.
 
Clientes Black 
-	Hasta 5 tarjetas de débito.
-	Hasta 5 cajas de ahorro en pesos y dólares sin cargos adicionales, luego se aplica un cargo extra.
-	Hasta 3 cuentas corrientes sin cargos adicionales.
-	Tarjetas VISA, Mastercard y/o American Express con hasta 10 extensiones cada una, con límites de $500,000 en un pago y $600,000 en cuotas.
-	Retiro máximo de $100,000 por día sin comisiones, con retiros ilimitados al mes sin costo adicional.
-	Acceso a cuentas de inversión.
-	Posibilidad de tener hasta dos chequeras.
-	No se aplican comisiones a las transferencias
'''