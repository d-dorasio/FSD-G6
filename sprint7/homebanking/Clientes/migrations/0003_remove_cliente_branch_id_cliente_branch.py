# Generated by Django 4.2.7 on 2023-11-16 15:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Sucursales', '0001_initial'),
        ('Clientes', '0002_rename_tipo_id_cliente_tipo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='branch_id',
        ),
        migrations.AddField(
            model_name='cliente',
            name='branch',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Sucursales.sucursal'),
            preserve_default=False,
        ),
    ]
