import {actionTypes} from '../actions/index';

const DATA = {
  iHaveText: 'Tengo',
  iWantText: 'Quiero',
  buySoles: 3.1900,
  buyDollars: 3.2380
}

const INIT_STATE = {
  // info: DATA,
  firstInputText: DATA.iHaveText,
  secondInputText: DATA.iWantText,
  inputText: '',
  outputText: '',
  exchangeForMoney1: DATA.buySoles,
  exchangeForMoney2: DATA.buyDollars,
  exchange: false,
  exchange2: false
}

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
        firstInputText: DATA.iHaveText,
        secondInputText: DATA.iWantText,
        exchangeForMoney1: DATA.buySoles,
        exchangeForMoney2: DATA.buyDollars
      }
      break;
    case actionTypes.EXCHANGE_2_CHANGED:
      state = {
        ...state,
        firstInputText: DATA.iWantText,
        secondInputText: DATA.iHaveText,
        exchangeForMoney1: DATA.buyDollars,
        exchangeForMoney2: DATA.buySoles
      }
      break;
    default:
      return state;
  }

  return state;
};