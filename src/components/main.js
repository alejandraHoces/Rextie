import React from 'react';
// import NewOperation from './NewOperation'
import TransactionHistory from "./TransactionHistory";
// import RextieBankAccounts from "./RextieBankAccounts";

const Main = () => {
  return (
    <main className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-9">
      {/* <NewOperation icon="dinero (1).png"/> */}
      <TransactionHistory />
      {/* <RextieBankAccounts /> */}
    </main>
  )
}

export default Main;