import React from 'react';
import NavigationOptions from './navigationOptions';

const NavigationOptionsList = ({options}) => {
  // const optionItems =  options.map(el => el );
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-3">
          <div>
            <ul>
              { options.map(el => <NavigationOptions option={el} key={el} />)
              }
            </ul>
            {/* <h1>Hola</h1> */}
            {/* <span><img src="../../assets/icons/usuario-hombre.png" /></span> */}
          </div>
        </div>
      </div>
    </div>
  )
}
// ../../assets/icons/usuario-hombre.png
export default NavigationOptionsList;