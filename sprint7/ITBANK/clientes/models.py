from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField()
    customer_surname = models.TextField()
    customer_dni = models.IntegerField(db_column='customer_DNI')
    dob = models.TextField(blank=True, null=True)
    branch_id = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True,)

    class Meta:
        managed = False
        db_table = 'cliente'

class Direccion(models.Model):
    id_address = models.IntegerField()
    address = models.TextField()

    class Meta:
        managed = False
        db_table = 'direccion'

class Empleado(models.Model):
    employee_id = models.AutoField(primary_key=True)
    employee_name = models.TextField()
    employee_surname = models.TextField()
    employee_hire_date = models.TextField()
    employee_dni = models.TextField(db_column='employee_DNI') 
    branch_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'empleado'

class PropietarioDireccion(models.Model):
    id_owner = models.IntegerField()
    type_owner = models.TextField()
    id_address = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'propietario_direccion'

class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.IntegerField()
    branch_name = models.TextField()

    class Meta:
        managed = False
        db_table = 'sucursal'

class TipoCliente(models.Model):
    tipo_cliente_id = models.IntegerField(primary_key=True)  # Cambiado el nombre del campo a tipo_cliente_id
    type_customer = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_cliente'


class TipoPropietario(models.Model):
    id_owner = models.IntegerField()
    name_owner_s_c_e = models.TextField(db_column='name_owner_s.c.e')

    class Meta:
        managed = False
        db_table = 'tipo_propietario'