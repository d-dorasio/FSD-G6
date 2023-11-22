from django.shortcuts import render
from .models import Tarjeta
from clientes.models import Cliente

# Create your views here.
def tarjeta(request):
    return render(request,"tarjetas/tarjetas.html")

def listar_tarjetas_cliente(request, cliente_id):
    # Obtener el cliente con el cliente_id
    cliente = Cliente.objects.get(pk=cliente_id)
    
    # Obtener todas las tarjetas asociadas al cliente
    tarjetas_cliente = Tarjeta.objects.filter(id_customer=cliente_id)

    # Puedes agregar más lógica aquí según tus necesidades

    # Pasar las tarjetas y el cliente al contexto y renderizar el template
    context = {'tarjetas_cliente': tarjetas_cliente, 'cliente': cliente}
    return render(request, 'tarjetas/listar_tarjetas_cliente.html', context)