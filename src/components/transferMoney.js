import React from 'react';
import UserBankAccount from './userBankAccount';
import MoneyReceiverAccount from './moneyReceiverAccount';

const TransferMoney = () => (
  <div>
    <UserBankAccount />
    <div><img src="../../assets/icons/transferir-dinero.png" alt="Icon"></img></div>
    <MoneyReceiverAccount />
  </div>
)

export default TransferMoney;