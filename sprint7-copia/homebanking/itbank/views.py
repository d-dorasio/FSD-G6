from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from clientes.models import Cliente


# Create your views here.
#@login_required  # ---> DESCOMENTAR LUEGO

def inicio(request):
    return render(request, 'itbank/inicio.html')

def detalles_cliente(request, cliente_id):
    cliente = get_object_or_404(Cliente, id=cliente_id)#Cliente.objects.get(pk=cliente_id)
    context = {'cliente': cliente}
    return render(request, 'itbank/detalles_cliente.html', context)