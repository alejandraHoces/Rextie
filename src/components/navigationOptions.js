import React from 'react';
import NavigationOptionsIcons from './navigationOptionsIcons';

const NavigationOptions = ({option}) => {
  return(
    <li>
      <NavigationOptionsIcons />{' '}<span>{option}</span>
    </li>
  )
} 

export default NavigationOptions;