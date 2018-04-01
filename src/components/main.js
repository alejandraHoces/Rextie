import React from 'react';
// import TransactionHistory from "./TransactionHistory";
// import RextieBankAccounts from "./RextieBankAccounts";
// import NewOperation from './NewOperation';
// usando router
import { Switch, Route } from 'react-router-dom';
import TransactionHistory from "./TransactionHistory";
import RextieBankAccounts from "./RextieBankAccounts";
import NewOperation from './NewOperation';


const Main = () => {
  return (
    <main className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-9">
      <Switch>
        <Route path='/new-operation' component={NewOperation} />
        <Route path='/historial' component={TransactionHistory} />
        <Route path='/bank-rextie' component={RextieBankAccounts} />
      </Switch>
    </main>
  )
}

export default Main;
