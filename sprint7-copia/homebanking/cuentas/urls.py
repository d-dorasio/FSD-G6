from django.urls import path
from . import views
from .views import crear_cuenta, listar_cuentas_cliente,realizar_transferencia

urlpatterns = [
    path ('', views.cuenta, name="cuentas"),
    path('crear/', crear_cuenta, name='crear_cuenta'),
    path('listar/<int:cliente_id>/', listar_cuentas_cliente, name='listar_cuentas_cliente'),
    path('realizar_transferencia/', realizar_transferencia, name='realizar_transferencia'),
]

