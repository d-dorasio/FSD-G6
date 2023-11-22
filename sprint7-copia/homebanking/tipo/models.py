from django.db import models

# Create your models here.
class TipoCliente(models.Model):
    id = models.AutoField(primary_key=True)
    type_customer = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tipo_cliente'


class TipoCuenta(models.Model):
    id = models.AutoField(primary_key=True)
    type_account = models.TextField()

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'
