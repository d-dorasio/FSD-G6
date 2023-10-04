# Defino librerias a utilizar
import csv
import os
from datetime import datetime

runtime = True

# file = 'cheques.csv'

#Funcion que lee los datos les archivo .csv
def read_file(file):
    checks = []
    file = open(file, "r", newline="")
    csvfile = csv.reader(file)
    for row in csvfile:
        if row != []:
            data = {
                "nrocheque": row[0],
                "codigobanco": row[1],
                "codigosucursal": row[2],
                "nrocuentaorigen": row[3],
                "nrocuentadestino": row[4],
                "valor": row[5],
                "fechaorigen": row[6],
                "fechapago": row[7],
                "dni": row[8],
                "tipo": row[9],
                "estado": row[10],
            }
            checks.append(data)

    file.close()
    return checks


# Función que busca por dni a los cheques dentro del archivo
def search_dni(dni, tipo):
    search = []
    cantchecks = 0
    checks = read_file(file)

    for cheque in checks:
        if cheque["dni"] == dni:
            if cheque["tipo"].lower() == tipo or tipo == "":
                cantchecks += 1
                search.append(cheque)

    numcheck = []
    for cheque in search:
        numcheck.append(cheque["nrocheque"])

    for number in numcheck:
        if numcheck.count(number) > 1:
            return False

    search.append(cantchecks)
    return search


# Función para exportar los resultados a un archivo CSV
def export_result(search_dni, dni):
    timestampactual = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
    file = f"{dni}_{timestampactual}.csv"

    csvfile = csv.writer(file)
    for row in search:
        csvfile.writerow(
            [
                row["nrocheque"],
                row["codigobanco"],
                row["codigosucursal"],
                row["nrocuentaorigen"],
                row["nrocuentadestino"],
                row["valor"],
                row["fechaorigen"],
                row["fechapago"],
                row["dni"],
                row["estado"]
            ]
        )

    file.close()
    print("Se grabo el archivo CSV")


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

        os.system("cls")

        if option == 1:
            file = input("Ingrese el nombre del archivo. Agregue el .csv \n").lower()
            dni = input("Ingrese el dni del usuario: ").lower()
            tipo = input(
                "Ingrese el tipo de cheque a buscar EMITIDO o DEPOSITADO: "
            ).lower()
            salida = input(
                "Ingrese si desea recibir la salida por PANTALLA o CSV: "
            ).lower()
            search = search_dni(dni, tipo)
            try:
                if search:
                    if salida == "pantalla":
                        print("------RESULTADOS------")
                        print(
                            f"\nSe encontraron {search[-1]} cheques {tipo}s con dni {dni}\n"
                        )
                        search.pop()
                        for result in search:
                            print(f"{result} \n")
                    elif salida == "csv":
                        search.pop()
                        export_result(search, dni)
                    else:
                        print("Opcion invalida")
                else:
                    print("error")

            except:
                print("Ingreso un dni erroneo")

        elif option == "2":
            print("Selecciono la opcion de SALIR")
            runtime = False
