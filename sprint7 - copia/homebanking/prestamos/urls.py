from django.urls import path
from . import views


urlpatterns = [
    path('lista_prestamos/<int:cliente_id>/', views.lista_prestamos, name='lista_prestamos_cliente'),
    # Otras URLs de la aplicación de préstamos, si las tienes
]
