import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {BrowserRouter, useLocation} from 'react-router-dom';
// import browserHistory from '../../browser-history';

import {changeTab} from '../../store/actions';
import {getActiveTabName} from '../../store/currencies/selectors';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Button from '@mui/material/Button';
import {activeTabNames, AppRoute} from '../../const';
import {redirectToRoute} from '../../store/actions';

import Stack from '@mui/material/Stack';

function Tabs() {
  const activeTabName = useTypedSelector(getActiveTabName);
  const dispatch = useDispatch();

  let path = '';

  switch (activeTabName) {
    case activeTabNames.CONVERTER:
      path = AppRoute.CURRENCY_LIST;
      break;
    case activeTabNames.CURRENCY_LIST:
      path = AppRoute.MAIN;
      break;
  }

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        dispatch(changeTab(activeTabNames.CONVERTER));
        break;
      case 'list':
        dispatch(changeTab(activeTabNames.CURRENCY_LIST));
        break;
    }
  }, [location, dispatch]);

  const handleTabClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(changeTab(evt.currentTarget.getAttribute('data-group')));
    dispatch(redirectToRoute(path));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <Stack spacing={2} direction="row" justifyContent="space-between" mb={5}>
          <BrowserRouter forceRefresh={true}>
            {Object.values(activeTabNames).map((tabName) => (
              <Button
                href="#"
                data-group={tabName}
                variant="contained"
                size="large"
                key={tabName}
                onClick={handleTabClick}
                disabled={tabName === activeTabName}
              >
                {tabName}
              </Button>
            ))}
          </BrowserRouter>
        </Stack>
      </section>
    </div>
  );
};


export default Tabs;