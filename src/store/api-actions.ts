import {
  changeIsLoadingStatus,
  loadCurrenciesAction,
  showErrorFormMessage,
} from './actions';

import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch} from '..';
import {APIRoute} from '../const';

const API_KEY = 'c232b0d79fdfea14ced81531';

// export const fetchCurrencyList = (changeFrom, changeTo) => (dispatch: AppDispatch, _getState: any, api: AxiosInstance) => (
export const fetchCurrencyList = () => (dispatch: AppDispatch, _getState: any, api: AxiosInstance) => (
  api.get(`/${API_KEY}/` + APIRoute.PAIR + '/EUR/GBP')
    .then(({data}: any) => {
      setTimeout(() => {
        dispatch(loadCurrenciesAction(data));
      }, 500);
    })
    .catch((err: AxiosError | Error) => {
      dispatch(changeIsLoadingStatus(false));
      dispatch(showErrorFormMessage(true, err.message));
    })
);
