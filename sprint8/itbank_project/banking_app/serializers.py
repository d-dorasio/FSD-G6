
from rest_framework import serializers
from .models import Tipo_Cliente, Cliente, Tipo_Cuenta, Cuenta, Prestamo, Sucursal, Marca_Tarjeta, Tarjeta
from django.contrib.auth.models import User

class TipoClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Cliente
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    usuario = UserSerializer()

    class Meta:
        model = Cliente
        fields = '__all__'

class TipoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo_Cuenta
        fields = '__all__'

class CuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuenta
        fields = '__all__'

class PrestamoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prestamo
        fields = '__all__'

class SucursalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sucursal
        fields = '__all__'

class MarcaTarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca_Tarjeta
        fields = '__all__'

class TarjetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarjeta
        fields = '__all__'
