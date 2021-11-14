import {FC} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

interface LayoutProps {
  className: string;
}

const Layout: FC<LayoutProps> = (props) => {
  const {
    children,
    className
  } = props;

  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <h2 className="header__title">Currency Converter</h2>
          <Stack spacing={2} direction="row" justifyContent="space-between" mb={5}>
            <Button variant="contained" size="large">Currency Converter</Button>
            <Button variant="contained" size="large">List of Exchange Rates</Button>
          </Stack>
        </div>
      </header>
      <Divider />
      {children}
    </ div>
  );
}

export default Layout;
