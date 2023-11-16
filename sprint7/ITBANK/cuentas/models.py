from django.db import models

# Create your models here.
class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField(blank=True, null=True)
    balance = models.IntegerField(blank=True, null=True)
    iban = models.TextField(blank=True, null=True)
    type_account_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuenta'

class TipoCuenta(models.Model):
    id = models.IntegerField()  
    type_account = models.TextField()

    class Meta:
        managed = False
        db_table = 'tipo_cuenta'