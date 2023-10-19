from cuenta import *
from tarjetas import *
class Cliente:
    def __init__(self, nombre, apellido, numero, dni):
        self.nombre = nombre
        self.apellido = apellido
        self.numero = numero
        self.dni = dni
        self.cuentas = []
        self.tarjetas = []

    def agregar_cuenta(self, cuenta):
        self.cuentas.append(cuenta)

    def agregar_tarjeta(self, tarjeta):
        self.tarjetas.append(tarjeta)

    def crear_cuenta(self, tipo_cuenta):
        if tipo_cuenta == "CajaAhorroPeso":
            nueva_cuenta = CajaAhorroPeso()
        elif tipo_cuenta == "CajaAhorroDolares":
            nueva_cuenta = CajaAhorroDolares()
        elif tipo_cuenta == "CuentaCorrientePeso":
            nueva_cuenta = CuentaCorrientePeso()
        elif tipo_cuenta == "CuentaCorrienteDolares":
            nueva_cuenta = CuentaCorrienteDolares()
        elif tipo_cuenta == "CuentaInversion":
            nueva_cuenta = CuentaInversion()
        else:
            print("Tipo de cuenta no válido.")
            return
        
        self.agregar_cuenta(nueva_cuenta)

    def realizar_transferencia(self, cuenta_destino, monto):
        # Implementa la lógica de transferencia
        pass

    def obtener_limite_retiro_diario(self):
        return 0

class Classic(Cliente):
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)

    def obtener_limite_retiro_diario(self):
        return 1000

class Gold(Cliente):
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)

    def obtener_limite_retiro_diario(self):
        return 2000

class Black(Cliente):
    def __init__(self, nombre, apellido, numero, dni):
        super().__init__(nombre, apellido, numero, dni)

    def obtener_limite_retiro_diario(self):
        return 5000
