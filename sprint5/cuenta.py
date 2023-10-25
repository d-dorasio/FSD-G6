
class Cuenta:
    def __init__(self, tipo, saldo=0):
        self.tipo = tipo
        self.saldo = saldo
    
    def __str__(self):
        return f"Tipo de cuenta: {self.tipo}. Saldo disponible: {self.saldo}"

class CajaAhorroPesos(Cuenta):
    def __init__(self):
        super().__init__("Caja de ahorro en pesos")

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