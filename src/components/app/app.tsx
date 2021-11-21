import { useEffect } from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {useDispatch} from 'react-redux';

import isoCountryCurrency from 'iso-country-currency';

import {AppRoute} from '../../const';
import Error from '../not-found/not-found';
import CurrencyList from '../currency-list/currency-list';
import Main from '../main/main';
import {fetchCurrencyList} from '../../store/api-actions';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getIsCurrencyLoaded} from '../../store/currencies/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import Util from '../../util/util';
import {baseCurrencyChanging} from '../../store/actions';

function App() {
  const dispatch = useDispatch();
  const language = Util.getLanguage();
  const baseCurrency = isoCountryCurrency.getAllInfoByISO(language).currency;

  dispatch(baseCurrencyChanging(baseCurrency));

  const isCurrenciesLoaded = useTypedSelector(getIsCurrencyLoaded);

  useEffect(() => {
    dispatch(fetchCurrencyList(baseCurrency));
  });

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