import React from 'react';
import NavigationOptions from './navigationOptions';
// import NavigationOptionsIcons from './navigationOptionsIcons';

const NavigationOptionsList = ({options, icons}) => {
//  const liIcons =  icons.map((el, i) => <NavigationOptionsIcons navigationIcon={el} key={el}/>);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div>
            <ul className="list-group">
               { options.map((el) => <NavigationOptions optionIcons={icons} option={el} key={el} />)
               }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
// ../../assets/icons/usuario-hombre.png
export default NavigationOptionsList;