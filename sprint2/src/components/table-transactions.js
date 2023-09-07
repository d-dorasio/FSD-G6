import React from 'react'

const tableTransactions = () => {
    return (
        <div>
            <table>
                <tr>
                    <th style="background-color: #C2B2B4;">Fecha</th>
                    <th style="background-color: #C2B2B4;">Descripción</th>
                    <th style="background-color: #C2B2B4;" colspan="2">Movimiento</th>
                </tr>
                <tr>
                    <td>2023-08-28</td>
                    <td>Compra en línea</td>
                    <td>-$50.00</td>
                </tr>
                <tr>
                    <td>2023-08-22</td>
                    <td>Devolución de compra</td>
                    <td>$30.00</td>
                </tr>
                <tr>
                    <td>2023-08-18</td>
                    <td>Retiro de cajero</td>
                    <td>-$200.00</td>
                </tr>
                <tr>
                    <td>2023-08-15</td>
                    <td>Pago de factura</td>
                    <td>-$75.00</td>
                </tr>
                <tr>
                    <td>2023-08-10</td>
                    <td>Transferencia recibida</td>
                    <td>$500.00</td>
                </tr>
                <tr>
                    <td>2023-08-05</td>
                    <td>Compra en tienda</td>
                    <td>-$150.00</td>
                </tr>
                <tr>
                    <td>2023-08-01</td>
                    <td>Depósito de nómina</td>
                    <td>$2000.00</td>
                </tr>
            </table>
        </div>
    )
}

export default tableTransactions

