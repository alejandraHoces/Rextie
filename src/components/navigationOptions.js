import React from 'react';
import NavigationOptionsIcons from './navigationOptionsIcons';

const NavigationOptions = ({option, optionIcons}) => {
  const liIcons =  optionIcons.map((el, i) => <NavigationOptionsIcons navigationIcon={el} key={el}/>);
  return(
    <li className="list-group-item">
      {liIcons}{' '}<span>{option}</span>
    </li>
  )
} 

export default NavigationOptions;