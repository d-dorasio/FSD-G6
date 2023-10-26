
class Tarjeta:
    def __init__(self, tipoTarjeta, marca, limiteTajeta, limiteCuotas):
        self.tipoTarjeta=tipoTarjeta #credito o debito
        self.marca=marca # Amex, Visa, Master
        self.limite=limiteTajeta
        self.limiteCuotas= limiteCuotas

    def __str__(self):
        return f"Tarjeta de {self.tipoTarjeta}, Marca {self.marca} con límite de {self.limite}"