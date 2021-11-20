export interface ICurrency {
    "result": string,
    "documentation": string,
    "terms_of_use": string,
    "time_last_update_unix": number,
    "time_last_update_utc": string,
    "time_next_update_unix": number,
    "time_next_update_utc": string,
    "base_code": string,
    "conversion_rates": {}
}

export interface ICurrenciesState {
  currencies: ICurrency[],
  activeTabName: string,
  isCurrencyLoaded: boolean,
  isShowErrorMessage: boolean,
  errorMessage: string,
  baseCurrency: string
};

export interface IChangeTabAction {
  type: string;
  payload: string;
}

export interface IBaseCurrencyChangingAction {
  type: string;
  payload: string;
}

export interface ILoadCurrenciesAction {
  type: string;
  payload: ICurrency[];
}

export interface IIsCurrenciesLoadedStatus {
  type: string;
  payload: boolean;
};

export interface IShowErrorMessage {
  type: string;
  payload: {
    isShowErrorMessage: boolean;
    errorMessageText: string;
  };
};
