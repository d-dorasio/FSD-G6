from django.db import models
from django.contrib.auth.models import User


class Cliente(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_name = models.CharField(max_length=255)
    customer_surname = models.CharField(max_length=255)
    customer_dni = models.CharField(max_length=20, db_column='customer_DNI')
    dob = models.DateField(blank=True, null=True)
    branch_id = models.IntegerField()
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True,)

    def __str__(self):
        return self.customer_name + " " + self.customer_surname

    class Meta:
        managed = True
        db_table = 'cliente'
