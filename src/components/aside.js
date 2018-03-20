import React from 'react';
import UserInfo from './userInfo.js';
import NavigationOptions from './navigationOptions.js';

const Aside = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3">
          <UserInfo />
          <NavigationOptions />
        </div>
      </div>
    </div>
  )
}

export default Aside