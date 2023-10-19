class Cuenta:
    def __init__(self, tipo_cuenta):
        self.tipo_cuenta = tipo_cuenta
        self.saldo = 0

class CajaAhorroPeso(Cuenta):
    def __init__(self):
        super().__init__("Caja de ahorro en peso")

class CajaAhorroDolares(Cuenta):
    def __init__(self):
        super().__init__("Caja de ahorro en dólares")

class CuentaCorrientePeso(Cuenta):
    def __init__(self):
        super().__init__("Cuenta Corriente en pesos")

class CuentaCorrienteDolares(Cuenta):
    def __init__(self):
        super().__init__("Cuenta Corriente en dólares")

class CuentaInversion(Cuenta):
    def __init__(self):
        super().__init__("Cuenta Inversión")
