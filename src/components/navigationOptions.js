import React from 'react';

import { Link } from 'react-router-dom';
const NavigationOptions = ({text, icon,route}) => {

  // const item = ((completed, text) => {
    //   return index === 0? <span key={el}><img className="navigation-icon" src={"../../assets/icons/" + el} alt={el}/></span>: <span key={el}>{el}</span>
    //   // return <Link to ={el[0]}><span key={el[1]}><img className="navigation-icon" src={"../../assets/icons/" + el[1]} alt={el[1]}/></span><span key={el[2]}>{el[2]}</span></Link>
    // })

  return(
    <li className="list-group-item">
      <Link to={route}>
        <span><img className="navigation-icon" src={"../../assets/icons/" + icon} alt={icon}/></span><span>{text}</span>
      </Link>
    </li>
  )
} 

export default NavigationOptions;