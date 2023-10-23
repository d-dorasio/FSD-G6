# class Tarjeta:
#     def __init__(self, tipo_tarjeta, nivel):
#         self.tipo_tarjeta = tipo_tarjeta
#         self.nivel = nivel

class Tarjeta:
    def __init__(self, tipoTarjeta, marca, limite):
        self.tipoTarjeta=tipoTarjeta #credito o debito
        self.marca=marca # Amex, Visa, etc
        self.limite=limite # pos el limite xd

    def __str__(self):
        return f"Tarjeta de {self.tipoTarjeta}, Marca {self.marca} con límite de {self.limite}"