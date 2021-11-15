import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import Error from '../not-found/not-found';
import CurrencyList from '../currency-list/currency-list';
import Main from '../main/main';


function App() {

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