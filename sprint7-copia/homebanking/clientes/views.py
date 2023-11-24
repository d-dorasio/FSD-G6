from django.shortcuts import render
from .models import Cliente
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import CreateUserForm


# Create your views here.
def cliente(request):
    return render(request,"clientes/cliente.html")

def detalles_cliente(request, cliente_id):
    cliente = Cliente.objects.get(pk=cliente_id)
    context = {'cliente': cliente}
    
    return render(request, 'clientes/detalles_cliente.html', context)

def pagina_registro(request):
    form1 = CreateUserForm
    #form2 = CreateClienteForm

    if request.method == 'POST':
        form1 = CreateUserForm(request.POST)
        #form2 = CreateClienteForm(request.POST)

        if form1.is_valid(): #and form2.is_valid():
            user = form1.save()
            username = form1.cleaned_data.get('username')

            Cliente.objects.create(
                customer_name = form1.cleaned_data.get('customer_name'),
                customer_surname = form1.cleaned_data.get('customer_surname'),
                customer_dni = form1.cleaned_data.get('customer_dni'),
                dob = form1.cleaned_data.get('dob'),
                branch_id = form1.cleaned_data.get('branch_id'),
                user = user
            )

            #cliente.instance.user = user
            #cliente = form2.save(commit=False)

            #cliente.user = user.username

            messages.success(request, '¡Cuenta creada!')

            return redirect('login')

    context = {'form': form1} #, 'cliente_form': form2}
    return render(request, 'clientes/registro.html', context)
