import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {useDispatch} from 'react-redux';

import isoCountryCurrency from 'iso-country-currency';

import {
  baseCurrencyChanging,
  countryChanging
} from '../../store/actions';
import countryCodes from './country-codes';

// the function from https://mui.com/components/autocomplete/#country-select
function CountrySelect() {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
      <Autocomplete
        id="country-select-demo"
        sx={{width: 300}}
        options={countryCodes}
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={(evt, value) => {
          console.log(value);
          try {
            if (value !== null) {
              const baseCurrency = isoCountryCurrency.getAllInfoByISO(value.code).currency;
              dispatch(baseCurrencyChanging(baseCurrency));
              dispatch(countryChanging(value.code));
            }
          } catch(err) {
            dispatch(baseCurrencyChanging('USD'));
          }
        }} // prints the selected value
        renderOption={(props, option) => (
          <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </div>
  );
}

export default CountrySelect;
