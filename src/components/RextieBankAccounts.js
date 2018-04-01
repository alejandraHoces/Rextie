import React from 'react';

const DATA = [{
  title: 'Cuentas Bancarias de Rextie',
  banks: [['Corriente', 'Doláres', '00316600300127343563'], ['Corriente', 'Soles', '00316600300127342868']]
}]

const RextieBankAccounts = () => {
  // var firstTh = document.getElementById('account-1').textContent;
  // var secondTh = document.getElementById('account-2').textContent;
  // var thirdTh = document.getElementById('account-3').textContent;
  // var fourthTh = document.getElementById('account-4').textContent;
  // var fifthTh = document.getElementById('account-5').textContent;
  // var sixthTh = document.getElementById('account-6').textContent;
  // localStorage.firstAccount = firstTh;
  // localStorage.secondAccount = secondTh;
  // localStorage.thirdAccount = thirdTh;
  // localStorage.fourthAccount = fourthTh;
  // localStorage.fifthAccount = fifthTh;
  // localStorage.sixthAccount = sixthTh;
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
              <th id="account-1">00316600300127343563</th>
            </tr>
            <tr>
              <th>Corriente</th>
              <th>Soles</th>
              <th id="account-2">00316600300127342868</th>
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
              <th id="account-3">1931700523109</th>
            </tr>
            <tr>
              <th>Corriente</th>
              <th>Soles</th>
              <th id="account-4">1932357833093</th>
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
              <th id="account-5">1663001273435</th>
            </tr>
            <tr>
              <th>Corriente</th>
              <th>Soles</th>
              <th id="account-6">1663001273428</th>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
  )
}

export default RextieBankAccounts;