from django.urls import path
from . import views
from .views import detalles_cliente

urlpatterns = [
    path ('', views.cliente, name="clientes"),
    path('detalles_cliente/<int:cliente_id>/', detalles_cliente, name='detalles_cliente'),
    path('registro/', views.pagina_registro, name='registro'),
]

