import {combineReducers} from 'redux';
import currenciesReducer from './currencies/currencies';
import countryReducer from './country/country';


export const NameSpace = {
  CURRENCIES: 'CURRENCIES',
  COUNTRIES: 'COUNTRIES',
};

const rootReducer = combineReducers({
  [NameSpace.CURRENCIES]: currenciesReducer,
  [NameSpace.COUNTRIES]: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export {rootReducer};
