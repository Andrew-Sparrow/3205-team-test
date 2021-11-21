import {FC, useState} from 'react';
import withLayout from '../hocs/with-layout';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import isoCountryCurrency from 'iso-country-currency';

import useBaseCurrency from '../../hooks/use-base-currency';
import CountrySelectCalculate from '../country-select-calculate/country-select-calculate';

const Main: FC = () => {
  const baseCurrency = useBaseCurrency();
  const [convertCurrencyTo, setConvertCurrencyTo] = useState('');
  const [calculatedResult, setCalculatedResult] = useState(0);

  function changeCurrencyCalculateTo(evt: any, value: any): void {
    try {
      if (value !== null) {
        const currencyConvertTo = isoCountryCurrency.getAllInfoByISO(value.code).currency;
        setConvertCurrencyTo(currencyConvertTo);
      }
    } catch (err) {
      setConvertCurrencyTo('USD');
    }
  }

  return (
    <div className="container">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        my={5}
      >
        <TextField
          id="outlined-number"
          label="Currency Amount"
          type="number"
          sx={{minWidth: '100px'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Typography variant="button" display="block" gutterBottom>
          from {baseCurrency}
        </Typography>
        <CountrySelectCalculate changeCurrencyCalculateTo={changeCurrencyCalculateTo} />
        <Typography variant="button" display="block" gutterBottom>
          to {convertCurrencyTo}
        </Typography>
      </Stack>
      <Typography variant="button" display="block" gutterBottom>
        Your Result:
      </Typography>
      <Typography variant="h4" gutterBottom sx={{minHeight: '80px'}}>
        {calculatedResult}
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="success"
        sx={{width: 1}}
        onClick={(evt) => {
          console.log('evt');
        }}
      >
        Calculate
      </Button>
    </div>
  );
};

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
