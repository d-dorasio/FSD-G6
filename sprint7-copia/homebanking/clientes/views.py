from django.shortcuts import render
from .models import Cliente
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import CreateUserForm, CreateClienteForm


# Create your views here.
def cliente(request):
    return render(request,"clientes/cliente.html")

def detalles_cliente(request, cliente_id):
    cliente = Cliente.objects.get(pk=cliente_id)
    context = {'cliente': cliente}
    
    return render(request, 'clientes/detalles_cliente.html', context)

def pagina_registro(request):
    form = CreateUserForm
    form2 = CreateClienteForm

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        form2 = CreateClienteForm(request.POST)

        '''
        Situaciones:
            if form.is_valid() and form2.is_valid():  =  no genera nada
            if form.is_valid():  =  genera usuario y no cliente
            if form2.is_valid():  =  no genera nada
            (sacamos la validación)  =  genera usuario y tira error de que no generó el cliente porque no validó
            
        '''

            user = form.save()

            cliente = form2.save(commit=False)
            cliente.user = user
            cliente.save()

            messages.success(request, '¡Cuenta creada!')

            return redirect('login')
        else:
            messages.error(request, '¡Hubo un error en el formulario!')


    context = {'form': form, 'cliente_form': form2}
    return render(request, 'clientes/registro.html', context)
        #if form.is_valid() and form2.is_valid():
        #username = form.cleaned_data.get('username')
        #cliente.user = user
