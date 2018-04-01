import React from 'react';

const NewOperationUSD = ({setExchange2Changed, secondText, outputText, setOutputText, sell}) => (
  <div>
    <div className="sale-price">   
      <p onClick={evt => {
    // console.log(evt.isTrusted)
       setExchange2Changed(evt.isTrusted);
       }}>Venta:<span>{sell}</span></p>
    </div>
    <div className="coin">
      <span>USD $</span>
    </div>
    <div className="what-i-have">
      <p>{secondText}</p>
      <input 
      value={outputText} 
      placeholder="Output"
      onChange={evt => {
        setOutputText(evt.target.value);
      }}
      />
    </div>
  </div>
);


export default NewOperationUSD;