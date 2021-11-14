import {createReducer} from '@reduxjs/toolkit';

import {
  IChangeTabAction,
  IIsOrdersLoadedStatus,
  ICurrenciesState,
  ILoadCurrenciesAction
} from '../../types/types';

import {groupNames} from '../../const';

import {
  changeTab,
  loadCurrenciesAction,
  changeIsLoadingStatus
} from '../actions';

const initialState: ICurrenciesState = {
  currencies: [],
  isCurrenciesLoading: false,
  isCurrencySuccessfullyLoaded: false,
  activeTabName: groupNames.CONVERTER
};

const currenciesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeTab, (state: ICurrenciesState, action: IChangeTabAction) => {
      state.activeTabName = action.payload;
    })
    .addCase(loadCurrenciesAction, (state: ICurrenciesState, action: ILoadCurrenciesAction) => {
      state.currencies = action.payload;
      state.isCurrenciesLoading = true;
    })
    .addCase(changeIsLoadingStatus, (state: ICurrenciesState, action: IIsOrdersLoadedStatus) => {
      state.isCurrencySuccessfullyLoaded = action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    })
});

export {currenciesReducer as ordersReducer};
