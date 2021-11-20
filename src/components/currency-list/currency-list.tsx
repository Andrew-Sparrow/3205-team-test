import React, {FC, useEffect} from 'react';
import withLayout from '../hocs/with-layout';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {activeTabNames} from '../../const';
import {changeTab} from '../../store/actions';
import {AppRoute} from '../../const';
import PaginationTable from '../pagination-table/pagination-table';

import Typography from '@mui/material/Typography';



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
  }, [location, dispatch]);

  return (
    <React.Fragment>
      <div className="container">
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{my: '50px'}}
        >
          Base currency = {'asdfasd'}
        </Typography>
      </div>
      <PaginationTable />
    </React.Fragment>
  );
};

const withLayoutMain = withLayout(CurrencyList);
export default withLayoutMain;