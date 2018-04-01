import React from 'react';

const NewOperationPEN = ({setExchangeChanged, firstText, inputText, setInputText, buy}) => (
  <div>
    <div className="buy-price">
      <p onClick={evt => {
    // console.log(evt.isTrusted)
    setExchangeChanged(evt.isTrusted);
  }}>Compra:<span>{buy}</span></p>
    </div>
    <div className="coin">
      <span>PEN s/</span>
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
  </div>
)

export default NewOperationPEN;