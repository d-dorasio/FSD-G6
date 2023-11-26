"""
URL configuration for homebanking project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from landing.views import landing

from clientes import views as viewsclientes
from cuentas import views as viewscuentas
from itbank import views as viewsitbank
from landing import views as viewslanding
from prestamos import views as viewsprestamos
from sucursales import views as viewssucursales
from tarjetas import views as viewstarjetas

urlpatterns = [
    path('', viewslanding.landing, name='landing'),
    path('accounts/',include('django.contrib.auth.urls')),
   
    path('admin/', admin.site.urls, name='admin'),

    path('itbank/', viewsitbank.inicio, name='inicio'),
    path('itbank/detalle_cliente/<int:cliente_id>/', viewsitbank.detalles_cliente, name='detalle_cliente'),

    path('clientes/', viewsclientes.cliente, name='cliente'),
    path('clientes/registro/', viewsclientes.pagina_registro, name='registro'),
    
    path('cuentas/', viewscuentas.cuenta, name='cuentas'),
    path('cuentas/crear/', viewscuentas.crear_cuenta, name='crear_cuenta'),
    path('cuentas/listar/<int:cliente_id>/', viewscuentas.listar_cuentas_cliente, name='listar_cuentas_cliente'),
    path('cuentas/realizar_transferencia/', viewscuentas.realizar_transferencia, name='realizar_transferencia'),
    
    path('tarjetas/', viewstarjetas.tarjeta, name='tarjetas'),
    path('tarjetas/listar/<int:cliente_id>/', viewstarjetas.listar_tarjetas_cliente, name='listar_tarjetas_cliente'),

    path('sucursales/', viewssucursales.sucursal, name='sucursales'),
    
    path('prestamos/lista_prestamos/<int:cliente_id>/', viewsprestamos.lista_prestamos, name='lista_prestamos_cliente'),

]


