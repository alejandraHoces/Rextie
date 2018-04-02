import {actionTypes} from '../actions/index';

const DATA = {
  iHaveText: 'Tengo',
  iWantText: 'Quiero',
  buySoles: 3.1900,
  buyDollars: 3.2380,
  money1: 'PEN S/',
  money2: 'USD $',
  flag1: 'pe.png',
  flag2: 'us.png',
  text1: '',
  text2: '',
  accounts: [
    {name: 'CCI Interbank', accountDollars: '00316600300127343563', accountSoles:  '00316600300127342868'},
    {name:'BCP', accountDollars: '1931700523109', accountSoles:  '1932357833093'},
    {name:'INTERBANK', accountDollars: '1663001273435', accountSoles: '1663001273428'}
  ]
}
// {DATA.accounts.map( account => {
//   console.log(account.accountDollars);
// } );}
const INIT_STATE = {
  bankAccounts: DATA.accounts,
  firstInputText: DATA.iHaveText,
  secondInputText: DATA.iWantText,
  inputText: DATA.text1,
  outputText: DATA.text2,
  peruvianMoney: DATA.money1,
  americanMoney: DATA.money2,
  peruvianFlag:DATA.flag1,
  americanFlag: DATA.flag2,
  exchangeForMoney1: DATA.buySoles,
  exchangeForMoney2: DATA.buyDollars,
  exchange: false,
  exchange2: false
}
console.log(DATA);
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.INPUT_TEXT_CHANGED:
      state = {
        ...state,
        inputText: action.text,
        outputText: action.text * 3.1900
      }
      break;
    case actionTypes.OUTPUT_TEXT_CHANGED:
      state = {
        ...state,
        inputText: action.text * 3.2380,
        outputText: action.text,
      }
      break;
    case actionTypes.EXCHANGE_CHANGED:
      state = {
        ...state,
        peruvianMoney: DATA.money1,
        americanMoney: DATA.money2,
        peruvianFlag: DATA.flag1,
        americanFlag: DATA.flag2,
        firstInputText: DATA.iHaveText,
        secondInputText: DATA.iWantText
      }
      break;
    case actionTypes.EXCHANGE_2_CHANGED:
      state = {
        ...state,
        peruvianMoney: DATA.money2,
        americanMoney: DATA.money1,
        peruvianFlag: DATA.flag2,
        americanFlag: DATA.flag1,
        firstInputText: DATA.iWantText,
        secondInputText: DATA.iHaveText,
      }
      break;
    default:
      return state;
  }

  return state;
};