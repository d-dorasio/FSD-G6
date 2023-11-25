from django.shortcuts import render
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Prestamo
from .forms import LoanForm
from datetime import date, datetime
from clientes.models import Cliente
from cuentas.models import Cuenta

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

#def lista_prestamos(request, cliente_id):
    # Obtener el cliente con el cliente_id
#    cliente = Cliente.objects.get(pk=cliente_id)

    # Obtener todos los préstamos asociados al cliente
#    prestamos_cliente = Prestamo.objects.filter(customer_id=cliente_id)

    # Puedes agregar más lógica aquí según tus necesidades

    # Pasar los préstamos y el cliente al contexto y renderizar el template
#    context = {'prestamos_cliente': prestamos_cliente, 'cliente': cliente}
#    return render(request, 'prestamos/lista_prestamos.html', context)

@login_required
def lista_prestamos(request, cliente_id):
    cliente = Cliente.objects.get(pk=cliente_id)
    cuenta = Cuenta.objects.filter(cliente_id__exact = cliente_id, tipo_id__exact = 1).first()
    if cliente.customer_id == request.user.id:
        
        initial_dict = {
            "nombre": cliente.customer_name,
            "apellido": cliente.customer_surname,
            "dni": cliente.customer_dni
        }

        form_prestamo = LoanForm(initial = initial_dict)
        

        if request.method == "POST":
            form_prestamo = LoanForm(data=request.POST)

            if form_prestamo.is_valid() and cuenta:

                tipoRecibido = request.POST.get('tipo','')
                fechaRecibida =  request.POST.get('fecha','')
                montoRecibido =  request.POST.get('monto','')

                if datetime.strptime(fechaRecibida,'%Y-%m-%d') > datetime.today():
                    if cliente.tipo_id == 1:
                        if int(montoRecibido) <= 100000:
                            prestamo = Prestamo( tipo = tipoRecibido, fecha = fechaRecibida, monto = montoRecibido, estado = "Aprobado" , cliente_id = cliente.id)
                            prestamo.save()
                            cuenta.balance = cuenta.balance + int(montoRecibido)
                            cuenta.save()
                            messages.success(request, 'Préstamo otorgado, verificar en "Mis préstamos", el saldo en su cuenta '+ cuenta.iban +' ha sido actualizado')
                        elif int(montoRecibido) > 100000:
                            prestamo = Prestamo( tipo = tipoRecibido, fecha = fechaRecibida, monto = montoRecibido, estado = "Pendiente" ,cliente_id = cliente.id)
                            prestamo.save()
                            messages.warning(request, 'Préstamo solicitado correctamente pero pendiente de aprobación, solo en caso de ser aprobado el saldo será depositado')
                    elif cliente.tipo_id == 2:
                        if int(montoRecibido) <= 300000:
                            prestamo = Prestamo( tipo = tipoRecibido, fecha = fechaRecibida, monto = montoRecibido, estado = "Aprobado" , cliente_id = cliente.id)
                            prestamo.save()
                            cuenta.balance = cuenta.balance + int(montoRecibido)
                            cuenta.save()
                            messages.success(request, 'Préstamo otorgado, verificar en "Mis préstamos", el saldo en su cuenta '+ cuenta.iban +' ha sido actualizado')
                        elif int(montoRecibido) > 300000:
                            prestamo = Prestamo( tipo = tipoRecibido, fecha = fechaRecibida, monto = montoRecibido, estado = "Pendiente" ,cliente_id = cliente.id)
                            prestamo.save()
                            messages.warning(request, 'Préstamo solicitado correctamente pero pendiente de aprobación, solo en caso de ser aprobado el saldo será depositado')
                    elif cliente.tipo_id == 3:
                        if int(montoRecibido) <= 500000:
                            prestamo = Prestamo( tipo = tipoRecibido, fecha = fechaRecibida, monto = montoRecibido, estado = "Aprobado" , cliente_id = cliente.id)
                            prestamo.save()
                            cuenta.balance = cuenta.balance + int(montoRecibido)
                            cuenta.save()
                            messages.success(request, 'Préstamo otorgado, verificar en "Mis préstamos", el saldo en su cuenta '+ cuenta.iban +' ha sido actualizado')
                        elif int(montoRecibido) > 500000:
                            prestamo = Prestamo( tipo = tipoRecibido, fecha = fechaRecibida, monto = montoRecibido, estado = "Pendiente" ,cliente_id = cliente.id)
                            prestamo.save()
                            messages.warning(request, 'Préstamo solicitado correctamente pero pendiente de aprobación, solo en caso de ser aprobado el saldo será depositado') 
                else:
                    messages.error(request,"Error: la fecha de inicio del préstamo debe ser posterior a "+ str(datetime.strftime(date.today(),'%d/%m/%Y')))
            else:
                 messages.error(request, "Error: el cliente debe poseer una caja de ahorro en pesos para solicitar un préstamo")

        return render(request, "Prestamos/prestamo.html", {"form":form_prestamo,
                                                       "cliente":cliente,
                                                       "cuenta":cuenta})
    else:
        return render(request, "Clientes/error.html", {"forms":""})

@login_required    
def por_cliente(request, cliente_id):
        cliente = Cliente.objects.get(pk=cliente_id)
        prestamos = Prestamo.objects.filter(cliente_id__exact = cliente_id)
        if cliente.usuario_id == request.user.id:
             return render(request, "Prestamos/prestamos_cliente.html", {"prestamos":prestamos,
                                                       "cliente":cliente})
        else:
                return render(request, "Clientes/error.html", {"prestamos":""})