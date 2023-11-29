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
from Clientes import views
from Cuentas import views as vista
from Tarjetas import views as vista2
from Inicio import views as vista3
from Sucursales import views as vista4
from Prestamos import views as vista5
from Contacto import views as vista6

urlpatterns = [
    path('', vista3.home, name="home"),
    path('clientes/inicio/', views.inicio, name="inicio"),
    path('clientes/', views.lista_cliente, name="clientes"),
    path('clientes/<int:cliente_id>/', views.detalle_cliente, name="cliente_detail"),
    path('clientes/register/', views.registro, name="register"),
    path('cuentas/', vista.lista_cuentas, name="cuentas"),
    path('cuentas/<int:id_cliente>/', vista.cuentas_cliente, name="cuentas_cliente"),
    path('tarjetas/', vista2.listado, name="tarjetas"),
    path('tarjetas/<int:id_cliente>/', vista2.por_cliente, name="tarjetas_cliente"),
    path('sucursales/', vista4.listado, name="sucursales"),
    path('prestamos/<int:cliente_id>/', vista5.solicitud_prestamo, name="prestamo"),
    path('misprestamos/<int:cliente_id>/', vista5.prestamos_cliente, name="prestamos_cliente"),
    path('contacto/', vista6.contacto, name="contacto"),
    path('accounts/',include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
]
