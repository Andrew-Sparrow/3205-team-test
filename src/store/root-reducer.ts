import {combineReducers} from 'redux';
import {currenciesReducer} from './currencies/currencies';


export const NameSpace = {
  CURRENCIES: 'CURRENCIES',
};

const rootReducer = combineReducers({
  [NameSpace.CURRENCIES]: currenciesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export {rootReducer};
