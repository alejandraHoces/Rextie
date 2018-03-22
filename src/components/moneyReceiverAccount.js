import React from 'react';

const MoneyReceiverAccount = () => {
    return (
      <div className="form-group">
        <label className="mr-sm-2 process-information-label" for="money-receiver-select">Cuenta Bancaria Destino</label>
        <select className="custom-select mr-sm-2 bank-account-select" id="money-receiver-select" required>
          <option value="">Selecciona la cuenta a la que deseas transferir</option>
          <option value="A">One</option>
          <option value="B">Two</option>
          <option value="C">Three</option>
        </select>
    </div>
    )
  }
  
  export default MoneyReceiverAccount;