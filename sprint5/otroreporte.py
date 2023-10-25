import json
from datetime import datetime

# Datos del cliente
clientePrueba = {
    "numero": 100001,
    "nombre": "Nicolas",
    "apellido": "Gaston",
    "dni": "29494777",
    "tipo": "BLACK",
    "transacciones": [
        {
            "estado": "ACEPTADA",
            "tipo": "RETIRO_EFECTIVO_CAJERO_AUTOMATICO",
            "cuentaNumero": 190,
            "permitidoActualParaTransaccion": 9000,
            "monto": 1000,
            "fecha": "10/10/2022 16:00:55",
            "numero": 1
        },
        {
            "estado": "RECHAZADA",
            "tipo": "COMPRA_EN_CUOTAS_TARJETA_VISA",
            "permitidoActualParaTransaccion": 9000,
            "monto": 750000,
            "fecha": "10/10/2022 16:14:35",
            "numero": 2
        }
    ]
}

# Función para obtener la razón de la aceptación o rechazo
def generar_informe_html(transaccion):
    if transaccion["estado"] == "ACEPTADA":
        return "Aprobada"
    elif transaccion["estado"] == "RECHAZADA":
        return "Rechazada"
    else:
        return "Desconocido"

# Generar informe HTML
html_report = "<html><head><title>Informe de Transacciones</title></head><body>"
html_report += f"<h1>Informe de Transacciones para {clientePrueba['nombre']} {clientePrueba['apellido']}</h1>"
html_report += f"<p>Número de Cliente: {clientePrueba['numero']}</p>"
html_report += f"<p>DNI: {clientePrueba['dni']}</p>"
html_report += f"<p>Tipo de Cliente: {clientePrueba['tipo']}</p>"

html_report += "<h2>Transacciones:</h2>"
html_report += "<table border='1'><tr><th>Estado</th><th>Tipo</th><th>Cuenta Número</th><th>Permitido Actual</th><th>Monto</th><th>Fecha</th><th>Número</th><th>Razón</th></tr>"

for transaccion in clientePrueba['transacciones']:
    html_report += f"<tr><td>{transaccion['estado']}</td><td>{transaccion['tipo']}</td><td>{transaccion['cuentaNumero']}</td>"
    html_report += f"<td>{transaccion['permitidoActualParaTransaccion']}</td><td>{transaccion['monto']}</td>"
    html_report += f"<td>{transaccion['fecha']}</td><td>{transaccion['numero']}</td>"
    razon = generar_informe_html(transaccion)
    html_report += f"<td>{razon}</td></tr>"


# HAY UN ERROR EN LA LÍNEA 52


html_report += "</table></body></html>"

# Guardar el informe en un archivo HTML
with open("informe_transacciones.html", "w") as archivo:
    archivo.write(html_report)

print("Informe de transacciones generado y guardado en informe_transacciones.html")
