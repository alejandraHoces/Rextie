import React from 'react';
import NewOperationPEN from './NewOperationPEN';
import NewOperationUSD from './NewOperationUSD';

const NewOperation = () => {
  return (
    <main className="col-md-6">
      <div className="main-box">
        <h3>¿Cuánto quieres cambiar?</h3>
        <div className="info-main-box">
          <h4>Cambio de Dólares Online</h4>
          <p>Seguro, Rápido y al Mejor precio</p>
        </div>
      </div>
      <div className="buy-sale-box">
        <div className="buy-box"> 
          <NewOperationPEN />
        </div>
        <div className="sale-box"> 
          <NewOperationUSD />
        </div>
      </div>
    </main>
  )
}

export default NewOperation;