from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets
from .models import Tipo_Cliente, Cliente, Tipo_Cuenta, Cuenta, Prestamo, Sucursal, Marca_Tarjeta, Tarjeta
from .serializers import TipoClienteSerializer, ClienteSerializer, TipoCuentaSerializer, CuentaSerializer, PrestamoSerializer, SucursalSerializer, MarcaTarjetaSerializer, TarjetaSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Definición de conjuntos de vistas para los modelos
class TipoClienteViewSet(viewsets.ModelViewSet):
    queryset = Tipo_Cliente.objects.all()
    serializer_class = TipoClienteSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class TipoCuentaViewSet(viewsets.ModelViewSet):
    queryset = Tipo_Cuenta.objects.all()
    serializer_class = TipoCuentaSerializer

class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

class PrestamoViewSet(viewsets.ModelViewSet):
    queryset = Prestamo.objects.all()
    serializer_class = PrestamoSerializer

class SucursalViewSet(viewsets.ModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer

class MarcaTarjetaViewSet(viewsets.ModelViewSet):
    queryset = Marca_Tarjeta.objects.all()
    serializer_class = MarcaTarjetaSerializer

class TarjetaViewSet(viewsets.ModelViewSet):
    queryset = Tarjeta.objects.all()
    serializer_class = TarjetaSerializer


# Vista para obtener datos de cliente autenticado
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_datos_cliente(request):
    cliente = request.user.cliente  # Obtén el cliente asociado al usuario autenticado
    serializer = ClienteSerializer(cliente)
    return Response(serializer.data)

# Vista para obtener saldo de cuenta del cliente autenticado
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def obtener_saldo_cuenta(request):
    cliente = request.user.cliente
    saldo = cliente.cuenta.balance
    return Response({'saldo': saldo})
