import React from 'react';

const UserInfo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="personal-account">
            <h5>Cuenta Personal</h5>
            <div>
              <span>DNI:</span>
              {' '}
              <span>78451235</span>
            </div>
            <div>
              <span>Ponte</span>,
              {' '}
              <span>Ana</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo;
