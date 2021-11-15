import {createReducer} from '@reduxjs/toolkit';

import {
  IChangeTabAction,
  IIsCurrenciesLoadedStatus,
  ICurrenciesState,
  ILoadCurrenciesAction,
  IShowErrorMessage
} from '../../types/types';

import {tabActiveNames} from '../../const';

import {
  changeTab,
  loadPairCurrenciesAction,
  changeIsLoadedStatus,
  showErrorMessage
} from '../actions';

const initialState: ICurrenciesState = {
  currencies: [],
  isCurrencyLoaded: false,
  activeTabName: tabActiveNames.CONVERTER,
  isShowErrorMessage: false,
  errorMessage: '',
};

const currenciesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeTab, (state: ICurrenciesState, action: IChangeTabAction) => {
      state.activeTabName = action.payload;
    })
    .addCase(loadPairCurrenciesAction, (state: ICurrenciesState, action: ILoadCurrenciesAction) => {
      state.currencies = action.payload;
      state.isCurrencyLoaded = true;
    })
    .addCase(changeIsLoadedStatus, (state: ICurrenciesState, action: IIsCurrenciesLoadedStatus) => {
      state.isCurrencyLoaded = action.payload;
    })
    .addCase(showErrorMessage, (state: ICurrenciesState, action: IShowErrorMessage) => {
      state.isShowErrorMessage = action.payload.isShowErrorMessage;
      state.errorMessage = action.payload.errorMessageText;
    })
    .addDefaultCase((state) => {
      return state;
    })
});

export {currenciesReducer};
