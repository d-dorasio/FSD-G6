# import json
# from datetime import datetime

# # Ruta completa al archivo JSON
# #json_file_path = "c:/Users/lunaa/Desktop/FSD-G6/sprint5/datos_cliente.json"

# # Cargar el JSON en una variable Python
# #with open('black.json', 'r') as archivo_json:
# #    clientePrueba = json.load(archivo_json)

# clientePrueba = {
# 	"numero": 100001,
# 	"nombre": "Nicolas",
# 	"apellido": "Gaston",
# 	"dni": "29494777",
# 	"tipo": "BLACK",
# 	"direccion" : {
# 		"calle" : "Rivadavia",
# 		"numero" : "7900",
# 		"ciudad": "Capital Federal",
# 		"provincia" : "Buenos Aires",
# 		"pais": "Argentina"
# 	},
# 	"transacciones": [{
# 			"estado": "ACEPTADA",
# 			"tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 9000,
# 			"cantidadExtraccionesHechas": 1,
# 			"monto": 1000,
# 			"fecha": "06/06/2022 10:00:55",
# 			"numero": 1,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA", 
# 			"tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 10000,
# 			"monto": 11000,
# 			"fecha": "06/06/2022 10:10:55",
# 			"numero": 2,
# 			"saldoEnCuenta": 10000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA",
# 			"tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 9000,
# 			"fecha": "06/06/2022 10:22:55",
# 			"numero": 3,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA",
# 			"tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 9000,
# 			"fecha": "06/06/2022 10:33:33",
# 			"numero": 4,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA",
# 			"tipo": "ALTA_TARJETA_CREDITO",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 9000,
# 			"fecha": "06/06/2022 12:00:00",
# 			"numero": 5,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA",
# 			"tipo": "ALTA_CHEQUERA",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 9000,
# 			"fecha": "06/06/2022 12:30:55",
# 			"numero": 6,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA",
# 			"tipo": "COMPRA_DOLAR",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 9000,
# 			"fecha": "06/06/2022 12:45:33",
# 			"numero": 7,
# 			"saldoEnCuenta": 5000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "RECHAZADA",
# 			"tipo": "TRANSFERENCIA_ENVIADA",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 1000000,
# 			"fecha": "06/06/2022 13:00:55",
# 			"numero": 8,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "ACEPTADA",
# 			"tipo": "TRANSFERENCIA_RECIBIDA",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 9000,
# 			"fecha": "06/06/2022 13:11:15",
# 			"numero": 9,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		},
# 		{
# 			"estado": "ACEPTADA",
# 			"tipo": "TRANSFERENCIA_RECIBIDA",
# 			"cuentaNumero": 190,
# 			"cupoDiarioRestante": 3000,
# 			"monto": 200000,
# 			"fecha": "06/06/2022 16:00:55",
# 			"numero": 10,
# 			"saldoEnCuenta": 100000,
# 			"totalTarjetasDeCreditoActualmente" : 5,
# 			"totalChequerasActualmente" : 2
# 		}
# 	]
# }

# # Función para obtener la razón de la aceptación o rechazo
# def generar_informe_html(transaccion):
#     if transaccion["estado"] == "ACEPTADA":
#         return "Aprobada"
#     elif transaccion["estado"] == "RECHAZADA":
#         return "Rechazada"
#     else:
#         return "Desconocido"

# # Generar informe HTML
# html_report = "<html><head><title>Informe de Transacciones</title></head><body>"
# html_report += f"<h1>Informe de Transacciones para {clientePrueba['nombre']} {clientePrueba['apellido']}</h1>"
# html_report += f"<p>Numero de Cliente: {clientePrueba['numero']}</p>"
# html_report += f"<p>DNI: {clientePrueba['dni']}</p>"
# html_report += f"<p>Tipo de Cliente: {clientePrueba['tipo']}</p>"

# html_report += "<h2>Transacciones:</h2>"
# html_report += "<table border='1'><tr><th>Estado</th><th>Tipo</th><th>Cuenta Número</th><th>Permitido Actual</th><th>Monto</th><th>Fecha</th><th>Número</th><th>Razón</th></tr>"

# for transaccion in clientePrueba['transacciones']:
#     html_report += f"<tr><td>{transaccion['estado']}</td><td>{transaccion['tipo']}</td>"
#     if 'cuentaNumero' in transaccion:
#         html_report += f"<td>{transaccion['cuentaNumero']}</td>"
#     else:
#         html_report += "<td>N/A</td>"
#     html_report += f"<td>{transaccion['cupoDiarioRestante']}</td><td>{transaccion['monto']}</td>"
#     html_report += f"<td>{transaccion['fecha']}</td><td>{transaccion['numero']}</td>"
#     razon = generar_informe_html(transaccion)
#     html_report += f"<td>{razon}</td></tr>"

# html_report += "</table></body></html>"

# # Guardar el informe en un archivo HTML
# with open("informe_transacciones.html", "w") as archivo:
#     archivo.write(html_report)

# print("Informe de transacciones generado y guardado en informe_transacciones.html")
