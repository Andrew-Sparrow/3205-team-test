import {FC} from 'react';
import withLayout from '../hocs/with-layout';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useBaseCurrency from '../../hooks/use-base-currency';

const Main: FC = () => {
  const baseCurrency = useBaseCurrency();

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
          InputLabelProps={{
            shrink: true,
          }}
        />
      <Typography variant="button" display="block" gutterBottom>
          from {baseCurrency} to
      </Typography>
      </Stack>
      <Button
        variant="contained"
        size="large"
        color="success"
        sx={{width: 1}}
      >
        Calculate
      </Button>
    </div>
  );
};

const withLayoutMain = withLayout(Main);
export default withLayoutMain;
