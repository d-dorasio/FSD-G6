import React from 'react'

const formTransactions = () => {
    return (
        <div>
            <label>Cuenta de Origen</label>
            <select class="tipo" name="accountFrom">
                <option value="cuenta1">Cuenta 1</option>
                <option value="cuenta2">Cuenta 2</option>
            </select>
            <label for="">Cuenta de Destino:</label>
            <select class="tipo" name="accountTo">
                <option value="cuenta3">Cuenta 3</option>
                <option value="cuenta4">Cuenta 4</option>
            </select>
            <label for="amount">Monto:</label>
            {/*<input type="text" class="campo-form" name="amount" placeholder="Ingrese el monto">
            <label for="description">Descripción o Motivo:</label>
            <input type="text" class="campo-form" name="description" placeholder="Ingrese una descripción">
            <label for="executionDate">Fecha de Ejecución:</label>
            <input type="date" class="campo-form" name="executionDate">
            <button type="button" class="boton-form">Transferir</button>
            
            SI LO DESCOMENTO TIRA ERROR NO SE QUE LE PASA
            
            */}
        </div> 
    )
}

export default formTransactions 