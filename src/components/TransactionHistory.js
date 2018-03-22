import React from 'react';

const TransactionHistory = () => {
  return (
    <div>
      <h2>Historial de Operaciones</h2>
      {' '}
      <div>
        <div>
          <p>Banco: Interbank</p>
          <p>Cuenta: 125XXXXXXXX</p>
          <p>Monto: $200</p>
        </div>
        {' '}
        <div>
          <p>Banco: Scotiabank</p>
          <p>Cuenta: 134XXXXXXXX</p>
          <p>Monto: S/.100</p>
        </div>
        {' '}
        <div>
          <p>Banco: Berta Huamaní</p>
          <p>Cuenta: 78634523</p>
          <p>Monto: S/.300</p>
        </div>
        {' '}
        <div>
          <p>Banco: BCP</p>
          <p>Cuenta: 127XXXXXXXX</p>
          <p>Monto: $30</p>
        </div>
      </div>
    </div>
  )
}

export default TransactionHistory;