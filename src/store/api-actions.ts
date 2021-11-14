import {
  changeIsLoadingStatus,
  loadCurrenciesAction,
  showErrorFormMessage,
} from './actions';

import {AxiosError, AxiosInstance} from 'axios';
import {AppDispatch} from '..';
import {APIRoute} from '../const';

export const fetchCurrencyList = () => (dispatch: AppDispatch, _getState: any, api: AxiosInstance) => (
  api.get(APIRoute.CURRENCIES)
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
