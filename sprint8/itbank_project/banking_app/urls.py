
from django.urls import path
from .views import (
    TipoClienteViewSet, ClienteViewSet, TipoCuentaViewSet, CuentaViewSet,
    PrestamoViewSet, SucursalViewSet, MarcaTarjetaViewSet, TarjetaViewSet,
    obtener_datos_cliente, obtener_saldo_cuenta
)

urlpatterns = [
    path('tipo_cliente/', TipoClienteViewSet.as_view({'get': 'list'}), name='tipo_cliente-list'),
    path('clientes/', ClienteViewSet.as_view({'get': 'list'}), name='clientes-list'),
    path('tipo_cuenta/', TipoCuentaViewSet.as_view({'get': 'list'}), name='tipo_cuenta-list'),
    path('cuentas/', CuentaViewSet.as_view({'get': 'list'}), name='cuentas-list'),
    path('prestamos/', PrestamoViewSet.as_view({'get': 'list'}), name='prestamos-list'),
    path('sucursales/', SucursalViewSet.as_view({'get': 'list'}), name='sucursales-list'),
    path('marcas_tarjeta/', MarcaTarjetaViewSet.as_view({'get': 'list'}), name='marcas_tarjeta-list'),
    path('tarjetas/', TarjetaViewSet.as_view({'get': 'list'}), name='tarjetas-list'),
    path('obtener-datos-cliente/', obtener_datos_cliente, name='obtener-datos-cliente'),
    path('obtener-saldo-cuenta/', obtener_saldo_cuenta, name='obtener-saldo-cuenta'),

]
