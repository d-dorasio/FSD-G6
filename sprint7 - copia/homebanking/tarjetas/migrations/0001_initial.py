# Generated by Django 4.2.7 on 2023-11-19 22:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MarcaTarjeta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand_id', models.TextField()),
                ('brand', models.TextField()),
            ],
            options={
                'db_table': 'marca_tarjeta',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tarjeta',
            fields=[
                ('id_card', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('number', models.CharField(max_length=255, unique=True)),
                ('cvv', models.CharField(max_length=255)),
                ('date_start', models.DateField()),
                ('date_finish', models.DateField()),
                ('id_customer', models.CharField(max_length=255)),
                ('id_brand', models.CharField(max_length=255)),
                ('type', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'tarjeta',
                'managed': True,
            },
        ),
    ]
