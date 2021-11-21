import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import countryCodes from '../country-select/country-codes';

// the function from https://mui.com/components/autocomplete/#country-select
function CountrySelectCalculate(props: any) {
  const {changeCurrencyCalculateTo} = props;

  return (
    <div>
      <Autocomplete
        id="country-select-demo"
        sx={{width: 300}}
        options={countryCodes}
        autoHighlight
        getOptionLabel={(option) => option.label}
        onChange={changeCurrencyCalculateTo} // prints the selected value
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

export default CountrySelectCalculate;