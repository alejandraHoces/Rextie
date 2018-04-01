import React from 'react';

var DATES = [{
  title: 'Cuentas Bancarias de Rextie',
  banks: [['Corriente', 'Doláres', '00316600300127343563'], ['Corriente', 'Soles', '00316600300127342868']]
}]

const RextieBankAccounts = () => {
  return (
    <div>
    <h2>Cuentas Bancarias de Rextie</h2>
    {' '}
    <div>
      <div>
        <p><span>Banco:</span> <span>Interbank</span></p>
        <p>Cuenta: 125XXXXXXXX</p>
      </div>
      {' '}
      <div>
        <p>Banco: Scotiabank</p>
        <p>Cuenta: 134XXXXXXXX</p>
      </div>
      {' '}
      <div>
        <p>Banco: BCP</p>
        <p>Cuenta: 127XXXXXXXX</p>
      </div>
    </div>
  </div>
  )
}

export default RextieBankAccounts;