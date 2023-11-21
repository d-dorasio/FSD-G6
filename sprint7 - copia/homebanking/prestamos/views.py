from django.shortcuts import render
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Prestamo
from clientes.models import Cliente
#from .forms import SolicitudPrestamoForm


# Create your views here.

#@login_required
# def solicitud_prestamo(request):
#     if request.method == 'POST':
#         form = SolicitudPrestamoForm(request.POST)
#         if form.is_valid():
#             # Procesar el formulario y guardar la solicitud de préstamo en la base de datos
#             nueva_solicitud = form.save(commit=False)
#             nueva_solicitud.cliente = request.user.cliente  # Asignar el cliente actual
#             nueva_solicitud.save()
#             return render(request, 'prestamos/solicitud_exitosa.html')  # Puedes crear esta plantilla
#     else:
#         form = SolicitudPrestamoForm()

#     return render(request, 'prestamos/solicitud_prestamo.html', {'form': form})

def lista_prestamos(request, cliente_id):
    # Obtener el cliente con el cliente_id
    cliente = Cliente.objects.get(pk=cliente_id)

    # Obtener todos los préstamos asociados al cliente
    prestamos_cliente = Prestamo.objects.filter(customer_id=cliente_id)

    # Puedes agregar más lógica aquí según tus necesidades

    # Pasar los préstamos y el cliente al contexto y renderizar el template
    context = {'prestamos_cliente': prestamos_cliente, 'cliente': cliente}
    return render(request, 'prestamos/lista_prestamos.html', context)