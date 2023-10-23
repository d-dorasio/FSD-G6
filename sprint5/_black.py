from cliente import *
from cuenta import *
from tarjeta import *

class Black(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
        self.tarjetasDebito = []  # Lista de tarjetas de débito
        self.cajasAhorro = []  # Lista de cajas de ahorro
        self.cuentasCorrientes = []  # Lista de cuentas corrientes
        self.tarjetas = []  # Lista de tarjetas (Visa/Mastercard/American Express)
        self.extensiones_tarjeta = []  # Lista de extensiones de tarjetas
        self.cargo_caja_dolares_adicional = 5  # Cargo mensual por caja de ahorro en dólares adicional
        self.limite_retiro_diario = 100000  # Límite de retiro diario
        self.retiro_efectivo_sin_comision_mensual = True  # Retiros ilimitados sin costo mensual
        self.acceso_cuentas_inversion = True
        self.chequeras = 2  # Hasta dos chequeras
        self.comision_transferencia_saliente = 0.0  # No se aplican comisiones a las transferencias
        self.comision_transferencia_entrante = 0.0
        self.extensiones_tarjeta_max = 10  # Máximo de 10 extensiones por tarjeta

    def crearTarjetaDebito(self,marca):
        if marca == "VISA" or marca == "AMEX" or marca == "MASTER":
            if len(self.tarjetasDebito) < 5:
                tarjeta_debito = Tarjeta("Débito", marca, 500000, 0)  # Tipo y límite de tarjeta pueden ser personalizados
                print(" * Tarjeta de débito creada")
                self.tarjetasDebito.append(tarjeta_debito)
            else:
                print("Error al crear tarjeta de débito: Límite alcanzado")
        else:
            print("Error. Elija una marca correspondiente")

    def crearCajaAhorro(self, tipo):
        if tipo == "pesos" or tipo == "dolares":
            if len(self.cajasAhorro) < 5:
                caja_ahorro = CajaAhorroPesos() if tipo == "pesos" else CajaAhorroDolares()
                print(f" * Caja de ahorro en {tipo} creada")
                self.cajasAhorro.append(caja_ahorro)
            else:
                print(f"Error al crear caja de ahorro en {tipo}: Límite alcanzado")
        else:
            print("Error al crear caja de ahorro: Tipo no válido")

    def crearCuentaCorriente(self):
        if len(self.cuentasCorrientes) < 3:
            cuenta_corriente = CuentaCorrientePeso()
            print(" * Cuenta corriente creada")
            self.cuentasCorrientes.append(cuenta_corriente)
        else:
            print("Error al crear cuenta corriente: Límite alcanzado")

    def crearTarjetaCredito(self, tipo):
        if tipo == "VISA" or tipo == "MASTER" or tipo == "AMEX":
            if len(self.tarjetas) < 5:
                tarjeta = Tarjeta("Crédito", tipo, 500000, 600000)  # Tipo y límites de tarjeta pueden ser personalizados
                print(f" * Tarjeta credito {tipo} creada")
                self.tarjetas.append(tarjeta)
            else:
                print("Error al crear tarjeta: Límite alcanzado")
        else:
            print("Error al crear tarjeta: Tipo no válido")

    def agregarExtensionTarjeta(self, tarjeta):
        if len(self.extensiones_tarjeta) < self.extensiones_tarjeta_max:
            self.extensiones_tarjeta.append(tarjeta)
            print(f" * Extensión de tarjeta creada")

    def realizarRetiroEfectivo(self, monto):
        if monto > self.limite_retiro_diario:
            print(f"Error: El monto de retiro supera el límite diario de ${self.limite_retiro_diario}")
        else:
            print("Retiro exitoso.")

    def realizarTransferenciaSaliente(self, monto):
        print(f"Transferencia Saliente de {monto} exitosa.")

    def realizarTransferenciaEntrante(self, monto):
        print(f"Transferencia Entrante de {monto} exitosa.")
    
    def __str__(self):
        return f"Cliente Black nuevo: {self.nombre} {self.apellido}, {self.dni}."
    


'''
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