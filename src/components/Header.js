import React from 'react';

const Header = ({url}) => (
  <header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <img className="logo" src={url} alt={url} />
        </div>
      </div>
    </div>
  </header>
)

export default Header;