# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User

class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.TextField()
    customer_surname = models.TextField()  # This field type is a guess.
    customer_dni = models.TextField(db_column='customer_DNI')  # Field name made lowercase.
    dob = models.TextField(blank=True, null=True)
    branch_id = models.IntegerField()
    user = User()

    class Meta:
        managed = False
        db_table = 'cliente'


class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField(blank=True, null=True)
    balance = models.IntegerField(blank=True, null=True)
    iban = models.TextField(blank=True, null=True)
    type_account_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuenta'


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


class MarcaTarjeta(models.Model):
    brand_id = models.TextField()  # This field type is a guess.
    brand = models.TextField()

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'


class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.TextField()
    loan_date = models.TextField()
    loan_total = models.IntegerField()
    customer_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'prestamo'


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


class Tarjeta(models.Model):
    id_card = models.TextField()  # This field type is a guess.
    number = models.TextField(unique=True)  # This field type is a guess.
    cvv = models.TextField()  # This field type is a guess.
    date_start = models.TextField()
    date_finish = models.TextField()
    id_customer = models.TextField()  # This field type is a guess.
    id_brand = models.TextField()  # This field type is a guess.
    type = models.TextField()

    class Meta:
        managed = False
        db_table = 'tarjeta'


class TipoCliente(models.Model):
    id = models.TextField()  # This field type is a guess.
    type_customer = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_cliente'


class TipoCuenta(models.Model):
    id = models.TextField()  # This field type is a guess.
    type_account = models.TextField()

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'


class TipoPropietario(models.Model):
    id_owner = models.TextField()  # This field type is a guess.
    name_owner_s_c_e = models.TextField(db_column='name_owner_s.c.e')  # Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'tipo_propietario'