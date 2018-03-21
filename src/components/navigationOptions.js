import React from 'react';

const NavigationOptions = ({option}) => {

  const item = 
    option.map((el, index) => {
      return index === 0? <span key={el}><img className="navigation-icon" src={"../../assets/icons/" + el} alt={el}/></span>: <span key={el}>{el}</span>
    })

  return(
    <li className="list-group-item">
      {item}
    </li>
  )
} 

export default NavigationOptions;