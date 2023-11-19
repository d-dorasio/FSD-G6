"""
URL configuration for ITBANK project.

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
from clientes import views as clientes_views
from myapp import views as myapp_views

urlpatterns = [
    path('', myapp_views.home, name="home"),  # Utiliza myapp_views para la vista home
    path('services/', myapp_views.services, name="services"),
    path('us/', myapp_views.us, name="us"),
    path('admin/', admin.site.urls),
    path('homeBanking/', include('homeBanking.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('register/', clientes_views.register, name='register'),
]
