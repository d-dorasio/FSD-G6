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
    
#//////////////////////////////////////////////////////////////////////////////////////
class Gold(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
        self.cajasAhorro = []  # Lista de cajas de ahorro
        self.cuentaCorriente = None  # Cuenta corriente
        self.tarjetas = []  # Lista de tarjetas (Visa/Mastercard)
        self.extensiones_tarjeta = []  # Lista de extensiones de tarjetas
        self.cargo_caja_dolares_adicional = 5  # Cargo mensual por caja de ahorro en dólares adicional
        self.limite_retiro_diario = 20000  # Límite de retiro diario
        self.retiro_efectivo_sin_comision = 0  # Retiros ilimitados sin costo mensual
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

#//////////////////////////////////////////////////////////////////////////////////////
class Classic(Cliente):
    
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)
        self.cuentaAhorroPesos = None
        self.cuentaAhorroDolares = None
        self.tarjetaDebito = None
        self.comision_transferencia_saliente = 0.01  # 1% por transferencias salientes
        self.comision_transferencia_entrante = 0.005  # 0.5% por transferencias entrantes
        self.limite_retiro_diario = 10000  # Límite de retiro diario
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