import React from 'react';

const RegisterAccount = () => (
  <div className="personal-bank-account">
    <div className="header-personal-bank-account">
      <h3>Cuentas Bancarias Personales -  </h3>
      <img src="assets/icons/simbolo-mas-en-un-cuadrado-negro-redondeado.png" />
    </div>
    <div className="soles-account">
      <p>Soles</p>
      <table className="container-soles">
        <tr>
          <th>Banco</th>
          <th>Tipo de Cuenta</th>
          <th>Número de Cuenta</th>
          <th className="in-use">En uso</th>
        </tr>
        <tr className="data-soles">
          <td>BCP</td><i class="fas fa-star"></i>
          <td>Ahorros</td>
          <td>19136248273015</td>
          <td className="in-use"><button type="button" className="active-button">Activo</button></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
)

export default RegisterAccount;