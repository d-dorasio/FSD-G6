from cliente import *
from cuenta import *
from tarjeta import *

class Classic(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
        self.cuentaAhorroPesos = None
        self.cuentaAhorroDolares = None
        self.tarjetaDebito = None
        self.comision_transferencia_saliente = 0.01  # 1% por transferencias salientes
        self.comision_transferencia_entrante = 0.005  # 0.5% por transferencias entrantes
        self.limite_retiro_diario = 10000 
        self.retiro_efectivo_sin_comision = 5  # Hasta 5 retiros sin comisiones

    def __str__(self):
        return f"Cliente Classic nuevo: {self.nombre} {self.apellido}, {self.dni}"
    
    def crearCuentaAhorroPesos(self):
        if self.cuentaAhorroPesos is None:
            self.cuentaAhorroPesos = CajaAhorroPesos()
            print(" * Caja de ahorro en pesos creada")
        else:
            print("Error al crear caja de ahorro en pesos: Ya tiene una cuenta de este tipo")

    def crearCuentaAhorroDolares(self):
        if self.cuentaAhorroDolares is None:
            self.cuentaAhorroDolares = CajaAhorroDolares()
            cargoMensual = 10  # Cargo mensual hipotético
            print(f" * Caja de ahorro en dólares creada con un cargo mensual de {cargoMensual}$")
        else:
            print("Error al crear caja de ahorro en dólares: Ya tiene una cuenta de este tipo")

    def crearTarjetaDebito(self, marca):
        if marca == "VISA" or marca == "MASTER" or marca =="AMEX":
            if self.tarjetaDebito is None:
                self.tarjetaDebito = Tarjeta("Debito", marca, 0, 0)
                print(f" * Tarjeta de débito {marca} creada.")
            else:
                print("Error al crear tarjeta de débito: Ya tiene una tarjeta de débito")
        else:
            print("Error al crear tarjeta: Tipo no válido")
    def realizarRetiroEfectivo(self, monto):
        if monto > self.limite_retiro_diario:
            print(f"Error: El monto de retiro supera el límite diario de ${self.limite_retiro_diario}")
        elif self.retiro_efectivo_sin_comision > 0:
            self.retiro_efectivo_sin_comision -= 1
            print("Retiro exitoso sin comisión")
        else:
            comision = monto * 0.01  # 1% de comisión
            print(f"Ha superado el limite de retiro diario. Se aplicó una comisión de ${comision} por retiro")

    def realizarTransferenciaSaliente(self, monto):
        comision = monto * self.comision_transferencia_saliente
        print(f"Transferencia saliente. Comisión del 1%: ${comision}")

    def realizarTransferenciaEntrante(self, monto):
        comision = monto * self.comision_transferencia_entrante
        print(f"Transferencia entrante. Comisión del 0.5% ${comision}")


'''
Clientes Classic 
-	Una tarjeta de débito. 
-	Caja de ahorro en pesos. 
-	Opcionalmente, caja de ahorro en dólares con cargo mensual. 
-	Hasta 5 retiros de dinero en efectivo sin comisiones, luego se aplica una tarifa. 
    El límite diario de retiro es de $10,000 por cajero. 
-	No tienen acceso a tarjetas de crédito. 
-	Comisión del 1% por transferencias salientes y 0.5% por transferencias entrantes. 
'''