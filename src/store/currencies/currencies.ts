import {createReducer} from '@reduxjs/toolkit';

import {
  IChangeTabAction,
  IIsCurrenciesLoadedStatus,
  ICurrenciesState,
  ILoadCurrenciesAction,
  IShowErrorMessage,
  IBaseCurrencyChangingAction
} from '../../types/types';

import {
  activeTabNames,
  currencyCodes
} from '../../const';

import {
  changeTab,
  loadAllCurrenciesAction,
  changeIsLoadedStatus,
  showErrorMessage,
  baseCurrencyChanging
} from '../actions';

const initialState: ICurrenciesState = {
  currencies: [],
  isCurrencyLoaded: false,
  activeTabName: activeTabNames.CONVERTER,
  isShowErrorMessage: false,
  errorMessage: '',
  baseCurrency: currencyCodes.USD
};

const currenciesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeTab, (state: ICurrenciesState, action: IChangeTabAction) => {
      state.activeTabName = action.payload;
    })
    .addCase(loadAllCurrenciesAction, (state: ICurrenciesState, action: ILoadCurrenciesAction) => {
      state.currencies = action.payload;
      state.isCurrencyLoaded = true;
    })
    .addCase(changeIsLoadedStatus, (state: ICurrenciesState, action: IIsCurrenciesLoadedStatus) => {
      state.isCurrencyLoaded = action.payload;
    })
    .addCase(showErrorMessage, (state: ICurrenciesState, action: IShowErrorMessage) => {
      state.isCurrencyLoaded = false;
      state.isShowErrorMessage = action.payload.isShowErrorMessage;
      state.errorMessage = action.payload.errorMessageText;
    })
    .addCase(baseCurrencyChanging, (state: ICurrenciesState, action: IBaseCurrencyChangingAction) => {
      state.baseCurrency = action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    })
});

export default currenciesReducer;
