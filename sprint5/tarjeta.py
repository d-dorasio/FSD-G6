# class Tarjeta:
#     def __init__(self, tipo_tarjeta, nivel):
#         self.tipo_tarjeta = tipo_tarjeta
#         self.nivel = nivel

class Tarjeta:
    def __init__(self, tipoTarjeta, marca, limiteTajeta, limiteCuotas):
        self.tipoTarjeta=tipoTarjeta #credito o debito
        self.marca=marca # Amex, Visa, etc
        self.limite=limiteTajeta # pos el limite xd
        self.limiteCuotas= limiteCuotas

    def __str__(self):
        return f"Tarjeta de {self.tipoTarjeta}, Marca {self.marca} con límite de {self.limite}"