from django.urls import path
from . import views
from .views import listar_tarjetas_cliente

urlpatterns = [
    path ('', views.tarjeta, name="tarjetas"),
    path('listar/<int:cliente_id>/', listar_tarjetas_cliente, name='listar_tarjetas_cliente'),


]
