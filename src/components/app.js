import React from 'react';
import Header from './header'
// import NewOperation from './NewOperation'
import Aside from './aside';

const App = () => (
  <div>
    <Header
      url="logo2.png" 
    />
    <div className="container-fluid">
      <div className="row">
        <Aside />
        {/* <NewOperation icon="dinero (1).png"/>  */}
    </div>
    </div>
  </div>
)   

export default App;
