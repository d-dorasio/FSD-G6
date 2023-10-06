import csv
import os
from datetime import datetime

# filecsv='cheque.csv'
filecsv = input("Ingrese el nombre del archivo CSV: \n").lower()

# Función para cargar los cheques desde el archivo CSV
def readFile(filecsv):
    checks = []
    if os.path.exists(filecsv):
        with open(filecsv, mode='r', newline='') as file:
            reader = csv.DictReader(file)
            for row in reader:
                checks.append(row)
    return checks



# Función para filtrar cheques por DNI
def filterDni(checks, dni_checks):
    return [check for check in checks if check['DNI'] == dni_checks]

# Función para filtrar cheques por tipo
def filterTipo(checks, tipo_checks):
    return [check for check in checks if check['Tipo'] == tipo_checks]

# Función para filtrar cheques por estado 
def filterEstado(checks, estado_checks):
    return [check for check in checks if estado_checks is None or check['Estado'] == estado_checks]

# Función para filtrar cheques por rango de fechas
def filterFechas(checks, rangofechas_checks):
    if rangofechas_checks is None:  
        return checks
    fecha_inicio = datetime.strptime(fecha_inicio, "%Y-%m-%d")
    fecha_fin = datetime.strptime(fecha_fin, "%Y-%m-%d")
    return [cheque for cheque in checks if fecha_inicio <= datetime.fromtimestamp(float(cheque["FechaPago"])) <= fecha_fin]

def filterAll(filecsv, filtro=None, fecha_inicio=None, fecha_fin=None):
    cheques = readFile(filecsv)

    if filtro:
        cheques = filterDni(cheques, filtro)

    if fecha_inicio and fecha_fin:
        cheques = filterFechas(cheques, fecha_inicio, fecha_fin)

    return cheques

# Función para imprimir los cheques en pantalla
def printCheck(filter_checks):
    if not filter_checks:
        print("No se encontraron cheques que cumplan con los criterios de búsqueda.")
    else:
        for check in filter_checks:           
            print(f"Nrocheck: {check['NroCheque']}")
            print(f"CodigoBanco: {check['CodigoBanco']}")
            print(f"CodigoSucursal: {check['CodigoSucursal']}")
            print(f"NumeroCuentaOrigen: {check['NumeroCuentaOrigen']}")
            print(f"NumeroCuentaDestino: {check['NumeroCuentaDestino']}")
            print(f"Valor: {check['Valor']}")
            print(f"FechaOrigen: {datetime.fromtimestamp(float(check['FechaOrigen'])).strftime('%Y-%m-%d')}")
            print(f"FechaPago: {datetime.fromtimestamp(float(check['FechaPago'])).strftime('%Y-%m-%d')}")
            print(f"DNI: {check['DNI']}")
            print(f"Estado: {check['Estado']}")

# Funcion para exportar checks si se elije la opcion de csv en salida
def exportCsv(check, outputfile):
    with open(outputfile, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=filter_checks[0].keys())
        writer.writeheader()
        for check in filter_checks:
            writer.writerow(check)



# Menú
if __name__ == "__main__":
    while True:
        print("\nMenú:")
        print("1. Ingreso de datos")
        print("4. Salir")

        option = -1
        while option == -1:
            try:
                option = int(input("Elija una opción:"))
            except ValueError:
                print("Por favor, ingrese un número.")
                option = -1

        if option == 1:
            dni_checks = input("Ingrese el DNI del cliente para la consulta: \n")
            tipo_checks = input("Ingrese el tipo de cheque a consultar (emitido, depositado): \n").lower()
            print("Estado, Fecha inicio y Fecha final son opcionales. Dejar en blanco si no se desea completar\n")
            estado_checks = input("Ingrese el estado del cheque a filtrar (pendiente, aprobado, rechazado): \n").lower()
            fecha_inicio= input("Ingrese la fecha de incio a filtrar (aaaa-mm-dd): \n")
            fecha_fin= input("Ingrese la fecha final a filtrar (aaaa-mm-dd): \n")
            filter_checks = filterAll(filecsv, filtro=dni_checks, fecha_inicio=fecha_inicio, fecha_fin=fecha_fin)
            salida = input("Ingrese si desea recibir la salida por pantalla o csv: ").lower()
            if salida == "pantalla":
                printCheck(filter_checks)
            elif salida == "csv":
                outputfile = f"checks_{dni_checks}.csv"
                exportCsv(filter_checks, outputfile)
                print(f"resultados exportados a {outputfile}.")

        elif option == 4:
            break

