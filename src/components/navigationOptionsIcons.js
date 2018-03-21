import React from 'react';

const NavigationOptionsIcons = ({navigationIcon}) => {
  return (
    <span><img className="navigation-icon" src={"../../assets/icons/" + navigationIcon} alt={navigationIcon}/>{' '}</span>
  )
}

export default NavigationOptionsIcons;