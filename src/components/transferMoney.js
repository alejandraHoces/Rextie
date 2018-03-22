import React from 'react';
import UserBankAccount from './userBankAccount';
import MoneyReceiverAccount from './moneyReceiverAccount';

const TransferMoney = () => (
  <div className="transfer-money-flex-container">
    <UserBankAccount />
    <div className="transfer-money-container-image"><img className="transfer-money-image" src="../../assets/icons/transferir-dinero.png" alt="Icon"></img></div>
    <MoneyReceiverAccount />
  </div>
)

export default TransferMoney;