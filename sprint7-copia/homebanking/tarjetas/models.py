from django.db import models

# Create your models here.
from django.db import models

class Tarjeta(models.Model):
    id_card = models.CharField(max_length=255, primary_key=True)
    number = models.CharField(max_length=255, unique=True)
    cvv = models.CharField(max_length=255)
    date_start = models.DateField()
    date_finish = models.DateField()
    id_customer = models.CharField(max_length=255)
    id_brand = models.CharField(max_length=255)
    type = models.CharField(max_length=255)

    class Meta:
        managed = True
        db_table = 'tarjeta'

class MarcaTarjeta(models.Model):
    brand_id = models.TextField()  # This field type is a guess.
    brand = models.TextField()

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'
