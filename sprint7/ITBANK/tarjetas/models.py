from django.db import models

# Create your models here.

class Tarjeta(models.Model):
    id_card = models.IntegerField() 
    number = models.IntegerField(unique=True)  
    cvv = models.IntegerField()  
    date_start = models.TextField()
    date_finish = models.TextField()
    id_customer = models.IntegerField()
    id_brand = models.IntegerField()
    type = models.TextField()

    class Meta:
        managed = False
        db_table = 'tarjeta'

class MarcaTarjeta(models.Model):
    brand_id = models.IntegerField() 
    brand = models.TextField()

    class Meta:
        managed = False
        db_table = 'marca_tarjeta'