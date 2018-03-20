import React from 'react';
import UserInfo from './userInfo.js';
import NavigationOptions from './navigationOptions.js';

const Aside = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-3">
          <UserInfo />
          <NavigationOptions />
        </div>
      </div>
    </div>
  )
}

export default Aside