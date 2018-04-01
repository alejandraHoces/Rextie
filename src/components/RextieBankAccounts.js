import React from 'react';

const DATA = [{
  title: 'Cuentas Bancarias de Rextie',
  banks: [['Corriente', 'Doláres', '00316600300127343563'], ['Corriente', 'Soles', '00316600300127342868']]
}]

const RextieBankAccounts = () => {
  return (
    <div>
      <h2>Cuentas Bancarias de Rextie</h2>
      {' '}
      <div className="rextie-bank-accounts-table-container">
        <p>CCI Interbank (para transferencias interbancarias)</p>
        <table>
          <thead>
            <tr>
              <th>Tipo de Cuenta</th>
              <th>Moneda</th>
              <th>Número de Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Corriente</th>
              <th>Dólares</th>
              <th>00316600300127343563</th>
            </tr>
            <tr>
              <th>Corriente</th>
              <th>Soles</th>
              <th>00316600300127342868</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rextie-bank-accounts-table-container">
        <p>BCP</p>
        <table>
          <thead>
            <tr>
              <th>Tipo de Cuenta</th>
              <th>Moneda</th>
              <th>Número de Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Corriente</th>
              <th>Dólares</th>
              <th>1931700523109</th>
            </tr>
            <tr>
              <th>Corriente</th>
              <th>Soles</th>
              <th>1932357833093</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rextie-bank-accounts-table-container">
        <p>INTERBANK</p>
        <table>
          <thead>
            <tr>
              <th>Tipo de Cuenta</th>
              <th>Moneda</th>
              <th>Número de Cuenta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Corriente</th>
              <th>Dólares</th>
              <th>1663001273435</th>
            </tr>
            <tr>
              <th>Corriente</th>
              <th>Soles</th>
              <th>1663001273428</th>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default RextieBankAccounts;