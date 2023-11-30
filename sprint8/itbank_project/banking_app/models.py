from django.db import models
from django.contrib.auth.models import User

# Create your models here.    
class Sucursal(models.Model):
    nombre = models.CharField(max_length=50)
    numero = models.IntegerField()

    def __str__(self):
        return self.nombre
    
class Tipo_Cliente(models.Model):
    cliente_tipo = models.CharField(max_length=20)

    def __str__(self):
        return self.cliente_tipo 

class Cliente(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    dni = models.CharField(max_length=10)
    dob = models.CharField(max_length=100)
    branch = models.ForeignKey(Sucursal, on_delete=models.CASCADE)
    tipo = models.ForeignKey(Tipo_Cliente, on_delete=models.CASCADE)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.name + " " + self.surname
    

class Tipo_Cuenta(models.Model):
    cuenta_tipo = models.CharField(max_length=30)

    def __str__(self):
        return self.cuenta_tipo

class Cuenta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    balance = models.IntegerField()
    iban = models.CharField(max_length=100)
    tipo = models.ForeignKey(Tipo_Cuenta, on_delete=models.CASCADE)


    def __str__(self):
        return str(self.tipo)

class Prestamo(models.Model):
    tipo = models.CharField(max_length=30)
    fecha = models.DateField()
    monto = models.IntegerField()
    estado = models.CharField(max_length=30)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    def __str__(self):
        return self.tipo + ". Monto: $" + str(self.monto)

    
class Marca_Tarjeta(models.Model):
    marca = models.CharField(max_length=20)

    def __str__(self):
        return self.marca

class Tarjeta(models.Model):
    numero = models.CharField(max_length=19)
    cvv = models.IntegerField()
    fecha_otorgamiento = models.CharField(max_length=7)
    fecha_expiracion = models.CharField(max_length=7)
    tipo = models.CharField(max_length=7)
    marca = models.ForeignKey(Marca_Tarjeta, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)


    def __str__(self):
        return "Tarjeta " + str(self.marca)