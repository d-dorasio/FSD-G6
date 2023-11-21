from django.urls import path
from . import views
from .views import detalles_cliente

urlpatterns = [
    path ('', views.cliente, name="clientes"),
    path('detalles/<int:cliente_id>/', views.detalles_cliente, name='detalles_cliente'),
]

