from django.shortcuts import render, redirect
from .forms import CrearCuentaForm
from .models import Cuenta
from clientes.models import Cliente
from .forms import TransferenciaForm

# Create your views here.
def cuenta(request):
    return render(request,"cuentas/cuenta.html")

def crear_cuenta(request):
    if request.method == 'POST':
        # Procesar el formulario cuando se envía
        form = CrearCuentaForm(request.POST)
        if form.is_valid():
            # Guardar la nueva cuenta en la base de datos
            nueva_cuenta = form.save()
            # Puedes agregar lógica adicional aquí si es necesario
            return redirect('detalle_cuenta', cuenta_id=nueva_cuenta.id)  # Redirigir a la página de detalles de cuenta
    else:
        # Mostrar el formulario para crear una nueva cuenta
        form = CrearCuentaForm()

    return render(request, 'cuentas/crear_cuenta.html', {'form': form})

def listar_cuentas_cliente(request, cliente_id):
    # Obtener todas las cuentas asociadas al cliente_id
    cliente = Cliente.objects.get(pk=cliente_id)
    
    # Obtener todas las cuentas asociadas al cliente
    cuentas_cliente = Cuenta.objects.filter(customer_id=cliente_id)

    # Puedes agregar más lógica aquí según tus necesidades

    # Pasar las cuentas y el cliente al contexto y renderizar el template
    context = {'cuentas_cliente': cuentas_cliente, 'cliente': cliente}
    return render(request, 'cuentas/listar_cuentas_cliente.html', context)

def realizar_transferencia(request):
    if request.method == 'POST':
        form = TransferenciaForm(request.POST)
        if form.is_valid():
            cuenta_origen_id = form.cleaned_data['cuenta_origen']
            cuenta_destino_id = form.cleaned_data['cuenta_destino']
            monto = form.cleaned_data['monto']

            # Lógica para realizar la transferencia
            # (actualizar los saldos de las cuentas, registrar la transacción, etc.)

            # Redirigir a la página de historial de transacciones o a donde desees
            return redirect('historial_transacciones')
    else:
        form = TransferenciaForm()

    return render(request, 'cuentas/realizar_transferencia.html', {'form': form})
