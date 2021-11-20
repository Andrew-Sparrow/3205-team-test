import { useEffect } from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {useDispatch} from 'react-redux';

import {AppRoute} from '../../const';
import Error from '../not-found/not-found';
import CurrencyList from '../currency-list/currency-list';
import Main from '../main/main';
import {fetchCurrencyList} from '../../store/api-actions';
import useBaseCurrency from '../../hooks/use-base-currency';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getIsCurrencyLoaded} from '../../store/currencies/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function App() {
  const dispatch = useDispatch();
  const baseCurrency = useBaseCurrency();
  const isCurrenciesLoaded = useTypedSelector(getIsCurrencyLoaded);

  useEffect(() => {
    dispatch(fetchCurrencyList(baseCurrency));
  }, []);

  if (!isCurrenciesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.CURRENCY_LIST}>
          <CurrencyList />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;