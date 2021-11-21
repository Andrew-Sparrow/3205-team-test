import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_GROUP: 'currencies/changeGroup',
  LOAD_CURRENCIES_PAIR: 'currencies/loadCurrenciesPair',
  LOAD_CURRENCIES_ALL: 'currencies/loadCurrenciesAll',
  IS_CURRENCIES_LOADED: 'currencies/isCurrenciesLoadedOrder',
  BASE_CURRENCY_CHANGING: 'currencies/baseCurrencyChanging',
  SHOW_ERROR_MESSAGE: 'currencies/showErrorMessage',
  REDIRECT_TO_ROUTE: 'currencies/redirectToRoute',
  LANGUAGE_DEFAULT_BROWSER: 'country/languageDefaultBrowser',
  COUNTRY_CHANGING: 'country/countryChanging'
};


export const changeIsLoadedStatus = createAction(
  ActionType.IS_CURRENCIES_LOADED,
  (isLoading) => ({payload: isLoading}),
);

export const baseCurrencyChanging = createAction(
  ActionType.BASE_CURRENCY_CHANGING,
  (baseCurrency) => ({payload: baseCurrency}),
);

export const countryChanging = createAction(
  ActionType.COUNTRY_CHANGING,
  (country) => ({payload: country}),
);

export const languageDefaultChanging = createAction(
  ActionType.LANGUAGE_DEFAULT_BROWSER,
  (defaultLanguage) => ({payload: defaultLanguage}),
);

export const changeTab = createAction(
  ActionType.CHANGE_GROUP,
  (groupName) => ({payload: groupName})
);

export const loadPairCurrenciesAction = createAction(
  ActionType.LOAD_CURRENCIES_PAIR,
  (items) => ({payload: items})
);

export const loadAllCurrenciesAction = createAction(
  ActionType.LOAD_CURRENCIES_ALL,
  (items) => ({payload: items})
);

export const showErrorMessage = createAction(
  ActionType.SHOW_ERROR_MESSAGE,
  (isShowErrorMessage, errorMessageText) => ({payload: {isShowErrorMessage, errorMessageText}})
);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({payload: url})
);
