import ReactDOM from 'react-dom';
import './index.css';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import {getAxiosInstance} from './services/api';
import App from './components/app/app';
import {rootReducer} from './store/root-reducer';
import {redirect} from './store/middlewares/redirect';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const api = getAxiosInstance();

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        },
      }).concat(redirect),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

const store = setupStore();

export type RootState = ReturnType<typeof store.getState>

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
