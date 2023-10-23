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