# from cliente import *
# from _classic import *
# from _gold import *
# from _black import *

# # Importa el módulo "otroreporte"
# from otroreporte import *

# def main():

#     # Crear un cliente de tipo Black
#     cliente_black = Black("Carlos", "López", "003", "654321")
#     print(cliente_black)
#     #Crear Tarjeta Debito
#     cliente_black.crearTarjetaDebito("AMEX")
#     # Crear cajas de ahorro
#     cliente_black.crearCajaAhorro("pesos")
#     cliente_black.crearCajaAhorro("dolares")
#     # Crear cuentas corrientes
#     cliente_black.crearCuentaCorriente()
#     # Crear tarjetas
#     cliente_black.crearTarjetaCredito("VISA")
#     cliente_black.crearTarjetaCredito("MASTER")
#     cliente_black.crearTarjetaCredito("AMEX")
#     cliente_black.crearTarjetaCredito("VISA")
#     cliente_black.crearTarjetaCredito("MASTER")
#     cliente_black.crearTarjetaCredito("AMEX")
#     #Agregar extension
#     cliente_black.agregarExtensionTarjeta("VISA")
#     # Realizar retiros en efectivo
#     print("Intento de retiro 1:")
#     cliente_black.realizarRetiroEfectivo(50000)
#     print("Intento de retiro 2:")
#     cliente_black.realizarRetiroEfectivo(100000) 
#     print("Intento de retiro 3:")
#     cliente_black.realizarRetiroEfectivo(150000) 
#     # Realizar transferencias
#     cliente_black.realizarTransferenciaSaliente(20000)  # Transferencia de $20,000
#     cliente_black.realizarTransferenciaEntrante(5000)  # Transferencia de $5,000
#     print("")

#     # Genera el informe en HTML utilizando la función del otro archivo
#     #generar_informe_html(clientePrueba)


# if __name__ == '__main__':
#     main()

import json
from cuenta import *
from tarjeta import *
from _black import *
from _classic import *
from _gold import *

def generar_informe_html(cliente_data):
    html_report = "<html><head><title>Informe de Transacciones</title></head><body>"
    html_report += "<h1>Informe de Transacciones</h1>"
    
    # Agregar sección de información del cliente
    html_report += "<h2>Informacion del Cliente:</h2>"
    html_report += f"<p>Nombre: {cliente_data['nombre']}</p>"
    html_report += f"<p>Apellido: {cliente_data['apellido']}</p>"
    html_report += f"<p>Numero de Cliente: {cliente_data['numero']}</p>"
    html_report += f"<p>DNI: {cliente_data['dni']}</p>"
    html_report += "<h2>Transacciones:</h2>"
    
    # Continuar con la generación de la tabla de transacciones
    html_report += "<table border='1'><tr><th>Estado</th><th>Tipo</th><th>Cuenta Numero</th><th>Permitido Actual</th><th>Monto</th><th>Fecha</th><th>Numero</th><th>Razon</th></tr>"

    for transaccion in cliente_data['transacciones']:
        html_report += f"<tr><td>{transaccion['estado']}</td><td>{transaccion['tipo']}</td>"
        if 'cuentaNumero' in transaccion:
            html_report += f"<td>{transaccion['cuentaNumero']}</td>"
        else:
            html_report += "<td>N/A</td>"
        html_report += f"<td>{transaccion['cupoDiarioRestante']}</td><td>{transaccion['monto']}</td>"
        html_report += f"<td>{transaccion['fecha']}</td><td>{transaccion['numero']}</td>"
        razon = "Razon de la transaccion" 
        html_report += f"<td>{razon}</td></tr>"

    html_report += "</table></body></html>"

    # Guardar el informe en un archivo HTML
    with open("informe_transacciones.html", "w") as archivo:
        archivo.write(html_report)

    print("Informe de transacciones generado y guardado en informe_transacciones.html")


def main():
    # Cargar el JSON ---> Cliente BLACK
    json_data = {
        "numero": 100051,
        "nombre": "Nicolas",
        "apellido": "Gaston",
        "dni": "12345678",
        "tipo": "BLACK",
        "transacciones": [{
                "estado": "ACEPTADA",
                "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
                "cuentaNumero": 190,
                "cupoDiarioRestante": 9000,
                "cantidadExtraccionesHechas": 1,
                "monto": 1000,
                "fecha": "06/06/2022 10:00:55",
                "numero": 1,
                "saldoEnCuenta": 100000,
                "totalTarjetasDeCreditoActualmente": 5,
                "totalChequerasActualmente": 2
            },
            {
                "estado": "RECHAZADA",
                "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
                "cuentaNumero": 190,
                "cupoDiarioRestante": 10000,
                "monto": 11000,
                "fecha": "06/06/2022 10:10:55",
                "numero": 2,
                "saldoEnCuenta": 10000,
                "totalTarjetasDeCreditoActualmente": 5,
                "totalChequerasActualmente": 2
            },
            {
                "estado": "RECHAZADA",
                "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
                "cuentaNumero": 190,
                "cupoDiarioRestante": 3000,
                "monto": 9000,
                "fecha": "06/06/2022 10:22:55",
                "numero": 3,
                "saldoEnCuenta": 100000,
                "totalTarjetasDeCreditoActualmente": 5,
                "totalChequerasActualmente": 2
            }
        ]
    }

    # Acceder a la lista de transacciones desde el JSON
    transacciones = json_data["transacciones"]

    # Realizar acciones basadas en las transacciones del JSON
    for transaccion in transacciones:
        if transaccion["estado"] == "ACEPTADA":
            if transaccion["tipo"] == "RETIRO_EFECTIVO_CAJERO_AUTOMATICO":
                monto_retiro = transaccion["monto"]
                print(f"Retiro exitoso de ${monto_retiro}.")
            # Agregar condiciones para otros tipos de transacciones si es necesario
        else:
            print(f"Transacción rechazada: {transaccion['tipo']}")

    tipo_cliente = json_data["tipo"]

    # Crear la instancia de cliente basada en el tipo
    if tipo_cliente == "BLACK":
        cliente = Black(json_data["nombre"], json_data["apellido"], json_data["numero"], json_data["dni"])
    elif tipo_cliente == "GOLD":
        cliente = Gold(json_data["nombre"], json_data["apellido"], json_data["numero"], json_data["dni"])
    elif tipo_cliente == "CLASSIC":
        cliente = Classic(json_data["nombre"], json_data["apellido"], json_data["numero"], json_data["dni"])
    else:
        print("Tipo de cliente desconocido en el JSON")

    # Generar informe HTML
    generar_informe_html(json_data)

if __name__ == '__main__':
    main()
