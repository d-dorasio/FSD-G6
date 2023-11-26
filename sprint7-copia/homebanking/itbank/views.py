from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from clientes.models import Cliente


# Create your views here.
#@login_required  # ---> DESCOMENTAR LUEGO

def inicio(request):
    return render(request, 'itbank/inicio.html')

def detalles_cliente(request, cliente_id):
    cliente = Cliente.objects.get(pk=cliente_id)
    context = {'cliente': cliente}
    return render(request, 'itbank/detalles_cliente/<int:cliente_id>.html', context)