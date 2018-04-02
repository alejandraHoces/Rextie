import React from 'react';
import NewOperationPEN from './NewOperationPEN';
import NewOperationUSD from './NewOperationUSD';

const NewOperation = ({inputText, outputText, firstText, secondText, buyMoney1, soles, peru,
  setInputText, setOutputText, setExchangeChanged, setExchange2Changed, buyMoney2, dollars, us
}) => {
  // console.log({us});
  return (
    <div className="new-operation">
      <div className="main-box">
        <h3>¿Cuánto quieres cambiar?</h3>
        <div className="info-main-box">
          <h4>Cambio de Dólares Online</h4>
          <p>Seguro, Rápido y al Mejor precio</p>
        </div>
      </div>
      <div className="buy-sale-box">
        <div className="buy-box"> 
          <NewOperationUSD setExchangeChanged={setExchangeChanged} firstText={firstText} inputText={inputText} setInputText={setInputText} buy={buyMoney1} flag={us} dollars={dollars} />
        </div>
        <div className="sale-box"> 
          <NewOperationPEN setExchange2Changed={setExchange2Changed} secondText={secondText} outputText= {outputText} setOutputText={setOutputText} sell={buyMoney2} flag2={peru} soles={soles} />
        </div>
      </div>
    </div>
  )
}

export default NewOperation;