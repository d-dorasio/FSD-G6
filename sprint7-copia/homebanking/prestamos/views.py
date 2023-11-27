from django.shortcuts import render, redirect
from .models import Prestamo 
from django.http import HttpResponse
from .forms import SolicitudPrestamoForm

def solicitud_prestamo(request):
    if request.method == 'POST':
        form = SolicitudPrestamoForm(request.POST)
        if form.is_valid():
            # Obtener los datos del formulario
            loan_type = form.cleaned_data['loan_type']
            loan_date = form.cleaned_data['loan_date']
            loan_amount = form.cleaned_data['loan_amount']

            # Verificar si el usuario está autenticado
            if request.user.is_authenticated:
                # Obtener el tipo de cliente
                client = request.user.cliente
                client_type = client.client_type

                # Aplicar restricciones de monto según el tipo de cliente
                if client_type == 'BLACK' and int(loan_amount) > 500000:
                    return HttpResponse("Monto de préstamo excede el límite para clientes BLACK.")
                elif client_type == 'GOLD' and int(loan_amount) > 300000:
                    return HttpResponse("Monto de préstamo excede el límite para clientes GOLD.")
                elif client_type == 'CLASSIC' and int(loan_amount) > 100000:
                    return HttpResponse("Monto de préstamo excede el límite para clientes CLASSIC.")
            else:
                # Lógica para usuarios anónimos (puedes adaptarla según tus necesidades)
                return HttpResponse("Solicitud de préstamo en proceso. Le pedimos que esté atento para la confirmación. ")

            # Procesar la solicitud de préstamo y actualizar la base de datos
            prestamo = Prestamo(
                loan_type=loan_type,
                loan_date=loan_date,
                loan_total=loan_amount,
                loan_state='PENDIENTE',  # Puedes establecer el estado inicial
                customer=client
            )
            prestamo.save()

            return HttpResponse("Solicitud de préstamo enviada correctamente.")
    else:
        form = SolicitudPrestamoForm()
    # Renderizar el formulario para solicitar el préstamo
    return render(request, 'prestamos/solicitud_prestamo.html', {'form': form})