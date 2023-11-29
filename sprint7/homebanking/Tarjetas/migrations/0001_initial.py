# Generated by Django 4.2.7 on 2023-11-16 00:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Clientes', '0002_rename_tipo_id_cliente_tipo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Marca_Tarjeta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marca', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Tarjeta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numero', models.CharField(max_length=19)),
                ('cvv', models.IntegerField()),
                ('fecha_otorgamiento', models.CharField(max_length=7)),
                ('fecha_expiracion', models.CharField(max_length=7)),
                ('tipo', models.CharField(max_length=7)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Clientes.cliente')),
                ('marca', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Tarjetas.marca_tarjeta')),
            ],
        ),
    ]