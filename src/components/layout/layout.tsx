import {FC} from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import useBaseCurrency from '../../hooks/use-base-currency';
import Tabs from '../tabs/tabs';
import CountrySelect from '../country-select/country-select';

interface LayoutProps {
  className?: string;
}

const Layout: FC<LayoutProps> = (props) => {
  const {
    children,
    className
  } = props;

  const baseCurrency = useBaseCurrency();

  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <h2 className="header__title">Currency Converter</h2>
          <Tabs />
          <CountrySelect />
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{my: '40px'}}
          >
              Base currency: {baseCurrency}
          </Typography>
        </div>
      </header>
      <Divider />
      {children}
    </ div>
  );
}

export default Layout;
