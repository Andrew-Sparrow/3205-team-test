import {combineReducers} from 'redux';
import {ordersReducer} from './currencies/currencies';


export const NameSpace = {
  ORDERS: 'ORDERS',
  FORM: 'FORM',
};

const rootReducer = combineReducers({
  [NameSpace.ORDERS]: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export {rootReducer};
