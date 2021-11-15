import {FC} from 'react';
import withLayout from '../hocs/with-layout';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoadingScreen from '../loading-screen/loading-screen';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getIsCurrencyLoaded} from '../../store/currencies/selectors';

const Main: FC = () => {
  const isCurrenciesLoaded = useTypedSelector(getIsCurrencyLoaded);

  if (!isCurrenciesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="container">
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        mt={5}
      >
        <TextField
          id="outlined-read-only-input"
          label="Enter Currency Amount"
          defaultValue="15 usd in rub"
        />
        <Button
          variant="contained"
          size="large"
          color="success"
        >
          Calculate
        </Button>
      </Stack>
    </div>
  );
};

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
