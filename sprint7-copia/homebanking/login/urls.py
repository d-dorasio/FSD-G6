from django.urls import path
from . import views
from .views import detalles_cliente

urlpatterns = [
    path ('', views.landing, name="landing"),
    path('login', views.login, name='login'),
]

