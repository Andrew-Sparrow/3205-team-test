import {FC, useEffect} from 'react';
import withLayout from '../hocs/with-layout';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';

import {activeTabNames} from '../../const';
import {changeTab} from '../../store/actions';
import {AppRoute} from '../../const';
import CurrencyTable from '../currency-table/currency-table';

const CurrencyList: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // this was made to synchronize tabs state with browser history tabs
  useEffect(() => {
    switch (location.pathname) {
      case AppRoute.MAIN:
        dispatch(changeTab(activeTabNames.CONVERTER));
        break;
      case AppRoute.CURRENCY_LIST:
        dispatch(changeTab(activeTabNames.CURRENCY_LIST));
        break;
    }
  });

  return (
    <CurrencyTable />
  );
};

const withLayoutMain = withLayout(CurrencyList);
export default withLayoutMain;