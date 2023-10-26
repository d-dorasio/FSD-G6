from cliente import *
from cuenta import *
from tarjeta import *

class Gold(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
        self.cajasAhorro = []  
        self.cuentaCorriente = None  # Cuenta corriente
        self.tarjetas = []  
        self.extensiones_tarjeta = [] 
        self.cargo_caja_dolares_adicional = 5  # Cargo mensual por caja de ahorro en dólares adicional
        self.limite_retiro_diario = 20000  
        self.retiro_efectivo_sin_comision = 0  
        self.acceso_cuentas_inversion = True
        self.chequera = True
        self.comision_transferencia_saliente = 0.005  # 0.5% por transferencias salientes
        self.comision_transferencia_entrante = 0.001  # 0.1% por transferencias entrantes

    def crearCajaAhorro(self, tipo):
        if tipo == "pesos" and len(self.cajasAhorro) < 2:
            caja_ahorro = CajaAhorroPesos()
            print(" * Caja de ahorro en pesos creada")
            self.cajasAhorro.append(caja_ahorro)
        elif tipo == "dolares" and len(self.cajasAhorro) < 2:
            caja_ahorro = CajaAhorroDolares()
            print(" * Caja de ahorro en dólares creada")
            self.cajasAhorro.append(caja_ahorro)
        else:
            print("Error al crear caja de ahorro: Límite alcanzado")

    def crearCuentaCorriente(self):
        if self.cuentaCorriente is None:
            self.cuentaCorriente = CuentaCorrientePeso()
            print(" * Cuenta corriente creada")
        else:
            print("Error al crear cuenta corriente: Ya tiene una cuenta corriente")

    def crearTarjeta(self, tipo):
        if tipo == "VISA" or tipo == "MASTER":
            if len(self.tarjetas) < 2:
                tarjeta = Tarjeta("Débito", tipo, 150000, 100000)
                print(f" * Tarjeta {tipo} creada")
                self.tarjetas.append(tarjeta)
            else:
                print("Error al crear tarjeta: Límite de tarjetas alcanzado")
        else:
            print("Error al crear tarjeta: Tipo no válido")

    def agregarExtensionTarjeta(self, tarjeta):
        if len(self.extensiones_tarjeta) < 5:
            self.extensiones_tarjeta.append(tarjeta)
            print(f" * Extensión de tarjeta creada")

    def realizarRetiroEfectivo(self, monto):
        if monto > self.limite_retiro_diario:
            print(f"Error: El monto de retiro supera el límite diario de ${self.limite_retiro_diario}")
        else:
            print("Retiro exitoso sin comisión")

    def realizarTransferenciaSaliente(self, monto):
        comision = monto * self.comision_transferencia_saliente
        print(f"Transferencia saliente. Comisión del 0.5%: ${comision}")

    def realizarTransferenciaEntrante(self, monto):
        comision = monto * self.comision_transferencia_entrante
        print(f"Transferencia entrante.Comisión del 0.1%: ${comision}")

    def __str__(self):
        return f"Cliente Gold nuevo: {self.nombre} {self.apellido}, {self.dni}"


'''
Clientes Gold 
-	Una tarjeta de débito.
-	Hasta 2 cajas de ahorro y una cuenta corriente sin cargos adicionales. Se aplica un cargo mensual extra por cajas de ahorro en dólares adicionales.
-	Tarjetas VISA y/o Mastercard con hasta 5 extensiones cada una, con límites de $150,000 en un pago y $100,000 en cuotas.
-	Máximo de $20,000 en retiros diarios sin comisiones. Retiros ilimitados sin costo mensual.
-	Acceso a cuentas de inversión.
-	Posibilidad de tener una chequera.
-	Comisión del 0.5% por transferencias salientes y 0.1% por transferencias entrantes.
'''