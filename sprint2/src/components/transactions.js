import React from 'react'
import formTransactions from './form-transactions'
import tableTransactions from './table-transactions'

const Transactions = () => {
  return (
    <div>
      <h1>Transferencias</h1>
      <h2>Formulario de transferencias</h2>
      <formTransactions />
      <h2>Historial de transferencias realizadas</h2>
      <tableTransactions />
    </div>
  )
}

export default Transactions
