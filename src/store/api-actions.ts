import {
  changeIsLoadedStatus,
  loadAllCurrenciesAction,
  showErrorMessage,
} from './actions';

import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch} from '..';
import {APIRoute} from '../const';

const API_KEY = 'c232b0d79fdfea14ced81531';

export const fetchCurrencyList = (baseCurrency: string) => (dispatch: AppDispatch, _getState: any, api: AxiosInstance) => (
  api.get(`/${API_KEY}` + APIRoute.LATEST + `${baseCurrency}`)
    .then(({data}: any) => {
      setTimeout(() => {
        dispatch(loadAllCurrenciesAction(data));
      }, 500);
    })
    .catch((err: AxiosError | Error) => {
      dispatch(changeIsLoadedStatus(false));
      dispatch(showErrorMessage(true, err.message));
    })
);
