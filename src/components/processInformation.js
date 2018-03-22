import React from 'react';
import TransferMoney from './transferMoney';

const ProcessInformation = () => (
  <div className="process-information-div">
    <form>
      <TransferMoney />
      <div className="form-group transfer-money-form-group">
        <label className="process-information-label" for="exampleInputEmail1">Celular</label>
        <div className="input-group process-information-input-group flex-container-center">
          <div className="input-group-prepend icon-input-container">
            <img className="icon-input" src="../../assets/icons/icon.png" alt="icon.png"></img>
          </div>
          <input type="email" className="form-control process-information-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />{' '}
        <label className="form-check-label" for="exampleCheck1"><b>Aceptar</b> <a href="#">Términos y Condiciones</a> y <a href="#">Políticas y Privacidad</a></label>
      </div>
    </form>
  </div>
)

export default ProcessInformation;