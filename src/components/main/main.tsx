import {FC, useState} from 'react';
import withLayout from '../hocs/with-layout';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import isoCountryCurrency from 'iso-country-currency';

import useBaseCurrency from '../../hooks/use-base-currency';
import CountrySelectCalculate from '../country-select-calculate/country-select-calculate';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getCurrencies} from '../../store/currencies/selectors';


const Main: FC = () => {
  const baseCurrency = useBaseCurrency();
  const [convertCurrencyTo, setConvertCurrencyTo] = useState('');
  const [calculatedResult, setCalculatedResult] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const currencies = useTypedSelector(getCurrencies);

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

  function calculateCurrencyChanging() {
    const currencyRates = currencies.conversion_rates;
    const currencyRate = currencyRates[convertCurrencyTo];

    const result = inputValue * currencyRate;
    setCalculatedResult(result);
  };

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
          value={inputValue}
          onChange={(evt: any) => {
            setInputValue(evt.target.value);
          }}
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
        {calculatedResult} {convertCurrencyTo}
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="success"
        sx={{width: 1}}
        onClick={(evt) => {
          calculateCurrencyChanging();
        }}
      >
        Calculate
      </Button>
    </div>
  );
};

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
