from django.shortcuts import render
from .models import Cliente
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import createUserForm, ClienteForm


# Create your views here.
def cliente(request):
    return render(request,"clientes/cliente.html")

def detalles_cliente(request, cliente_id):
    cliente = Cliente.objects.get(pk=cliente_id)
    context = {'cliente': cliente}
    return render(request, 'clientes/detalles_cliente.html', context)

def pagina_registro(request):
    form = createUserForm
    cliente_form = ClienteForm

    if request.method == 'POST':
        form = createUserForm(request.POST)
        cliente_form = ClienteForm(request.POST)

        if form.is_valid() and cliente_form.is_valid():
            user = form.save()

            cliente = cliente_form.save(commit=False)
            cliente.usuario = user

            cliente.save()

            messages.success(request, '¡Cuenta creada!')

            return redirect('login')

    context = {'form': form, 'cliente_form': cliente_form}
    return render(request, 'clientes/registro.html', context)
