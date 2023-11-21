from django.db import models
from clientes.models import Cliente
# Create your models here.
class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    customer_id = models.IntegerField(blank=True, null=True)
    balance = models.IntegerField(blank=True, null=True)
    iban = models.CharField(max_length=255, blank=True, null=True)
    type_account_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'cuenta'
