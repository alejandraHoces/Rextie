import React from 'react';

const NewOperationUSD = ({setExchangeChanged, firstText, inputText, setInputText, buy, flag, dollars}) => {
  // console.log({flag});
  return(<div>
    <div className="buy-price font-weight-bold">
      <p onClick={evt => {
    // console.log(evt.isTrusted)
    setExchangeChanged(evt.isTrusted);
  }}>Compra:{' '}<span>{buy}</span></p>
    </div>
    <div className="coin">
      <span>{dollars}</span><span><img className="flag-us-icon" src={"../../assets/icons/" + flag} alt={flag} /></span>
    </div>
    <div className="what-i-have">
      <p>{firstText}</p>
      <input 
      value={inputText} 
      onChange={evt => {
        setInputText(evt.target.value)
      }}
      placeholder="Input"
      />
    </div>
  </div>)
}

export default NewOperationUSD;