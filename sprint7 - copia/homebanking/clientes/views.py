from django.shortcuts import render
from .models import Cliente

# Create your views here.
def cliente(request):
    return render(request,"clientes/cliente.html")

def detalles_cliente(request, cliente_id):
    cliente = Cliente.objects.get(pk=cliente_id)
    context = {'cliente': cliente}
    return render(request, 'clientes/detalles_cliente.html', context)
