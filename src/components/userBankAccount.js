import React from 'react';

const UserBankAccount = () => {
  return (
    <div className="form-group">
      <label className="process-information-label" for="user-bank-account-select">Cuenta Bancaria de Origen</label>
      <select className="custom-select" id="user-bank-account-select" required>
        <option value="">Selecciona la cuenta de donde realizarás la transferencia</option>
        <option value="A">One</option>
        <option value="B">Two</option>
        <option value="C">Three</option>
      </select>
  </div>
  )
}

export default UserBankAccount;