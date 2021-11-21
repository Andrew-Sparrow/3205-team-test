import {createReducer} from '@reduxjs/toolkit';

import {
  IChangeCountryAction,
  ICountryState
} from '../../types/types';

import {
  countryChanging,
} from '../actions';

const initialState: ICountryState = {
  country: 'RUS',
  language: 'RU',
};

const countryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(countryChanging, (state: ICountryState, action: IChangeCountryAction) => {
      state.country = action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    })
});

export default countryReducer;