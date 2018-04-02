import React from 'react';

const NewOperationPEN = ({setExchange2Changed, secondText, outputText, setOutputText, sell, flag2, soles}) => (
  <div>
    <div className="sale-price font-weight-bold">   
      <p onClick={evt => {
    // console.log(evt.isTrusted)
       setExchange2Changed(evt.isTrusted);
       }}>Venta:{' '}<span>{sell}</span></p>
    </div>
    <div className="coin">
      <span>{soles}</span><span><img className="flag-pe-icon" src={"../../assets/icons/" + flag2} alt={flag2} /></span>
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


export default NewOperationPEN;