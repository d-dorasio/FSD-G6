from django.shortcuts import render
from .models import Sucursal
# Create your views here.
def sucursal(request):
    sucursales = Sucursal.objects.all() 
    return render(request,"sucursales/sucursal.html", {'sucursales': sucursales})