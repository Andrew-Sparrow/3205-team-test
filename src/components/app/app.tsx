import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {useDispatch} from 'react-redux';

import {AppRoute, currencyCodes} from '../../const';
import Error from '../not-found/not-found';
import CurrencyList from '../currency-list/currency-list';
import Main from '../main/main';
import {fetchCurrencyList} from '../../store/api-actions';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCurrencyList(currencyCodes.USD));

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