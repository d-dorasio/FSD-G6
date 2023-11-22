from django.db import models

# Create your models here.

class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_number = models.IntegerField()
    branch_name = models.TextField()

    class Meta:
        managed = False
        db_table = 'sucursal'

class Direccion(models.Model):
    id_address = models.IntegerField()
    address = models.TextField()

    class Meta:
        managed = False
        db_table = 'direccion'

class PropietarioDireccion(models.Model):
    id_owner = models.IntegerField()
    type_owner = models.TextField()
    id_address = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'propietario_direccion'


class TipoPropietario(models.Model):
    id_owner = models.TextField()  # This field type is a guess.
    name_owner_s_c_e = models.TextField(db_column='name_owner_s.c.e')  # Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'tipo_propietario'