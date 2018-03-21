import React from 'react';
import NavigationOptions from './navigationOptions';

const NavigationOptionsList = ({options}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div>
            <ul className="list-group">
               { options.map((el) => <NavigationOptions option={el} key={el} />)
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