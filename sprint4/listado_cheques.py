import csv
from datetime import datetime

# Función para cargar los cheques desde el archivo CSV
def readFile(filecsv):
    checks = []

    while True:
        try:
            with open(filecsv, mode='r', newline='') as file:
                reader = csv.DictReader(file)
                checks = list(reader)
            return checks
        
        except FileNotFoundError:
            print(" * El archivo CSV no se encontró.")
            filecsv = input("Ingrese un nuevo nombre de archivo CSV correctamente: " )
            filecsv += ".csv"
    

# Función para filtrar los cheques según diferentes criterios
def filterAll(checks, dni, tipo, estado=None, fecha_inicio=None, fecha_fin=None):
    filtered_checks = checks
    if dni:
        filtered_checks = [check for check in filtered_checks if check['DNI'] == dni]
    if tipo:
        filtered_checks = [check for check in filtered_checks if check['Tipo'].lower() == tipo.lower()]
    if estado:
        filtered_checks = [check for check in filtered_checks if check['Estado'].lower() == estado.lower()]
    if fecha_inicio and fecha_fin:
        fecha_inicio = datetime.strptime(fecha_inicio, "%Y-%m-%d")
        fecha_fin = datetime.strptime(fecha_fin, "%Y-%m-%d")
        filtered_checks = [check for check in filtered_checks if fecha_inicio <= datetime.fromtimestamp(float(check['FechaPago'])) <= fecha_fin]
    
    return filtered_checks

# Función para exportar los cheques filtrados a un archivo CSV
def exportCsv(filtered_checks, outputfile):
    with open(outputfile, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=filtered_checks[0].keys())
        writer.writeheader()
        writer.writerows(filtered_checks)

# Función principal del programa
def main():
    filecsv = input("Ingrese el nombre del archivo CSV: ")
    filecsv += ".csv"
    checks = readFile(filecsv)

    while True:
        print("\nMenú:")
        print("1. Ingreso de datos")
        print("4. Salir")

        option = int(input("Elija una opción:"))
        
        if option == 1:
            dni = input("Ingrese el DNI del cliente para la consulta: ")
            tipo = input("Ingrese el tipo de cheque a consultar (emitido, depositado): ").lower()
            estado = input("* OPCIONAL: Ingrese el estado del cheque a filtrar (pendiente, aprobado, rechazado): ").lower()
            fecha_inicio = input("* OPCIONAL: Ingrese la fecha de inicio a filtrar (aaaa-mm-dd): ")
            fecha_fin = input("* OPCIONAL: Ingrese la fecha final a filtrar (aaaa-mm-dd): ")

            filtered_checks = filterAll(checks, dni, tipo, estado, fecha_inicio, fecha_fin)
            salida = input('Ingrese si desea recibir la salida por "pantalla" o "csv": ').lower()
            
            if salida == "pantalla":
                for check in filtered_checks:
                    print("--------------------")
                    print(f"Nrocheck: {check['NroCheque']}")
                    print(f"CodigoBanco: {check['CodigoBanco']}")
                    print(f"CodigoSucursal: {check['CodigoSucursal']}")
                    print(f"NumeroCuentaOrigen: {check['NumeroCuentaOrigen']}")
                    print(f"NumeroCuentaDestino: {check['NumeroCuentaDestino']}")
                    print(f"Valor: {check['Valor']}")
                    print(f"FechaOrigen: {datetime.fromtimestamp(float(check['FechaOrigen'])).strftime('%Y-%m-%d')}")
                    print(f"FechaPago: {datetime.fromtimestamp(float(check['FechaPago'])).strftime('%Y-%m-%d')}")
                    print(f"DNI: {check['DNI']}")
                    print(f"Tipo: {check['Tipo']}")
                    print(f"Estado: {check['Estado']}")

            elif salida == "csv":
                outputfile = f"checks_{dni}.csv"
                exportCsv(filtered_checks, outputfile)
                print(f"resultados exportados a {outputfile}.")
            
        elif option == 4:
            break

if __name__ == "__main__":
    main()