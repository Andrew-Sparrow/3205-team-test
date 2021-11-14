import {FC} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface LayoutProps {
  className: string;
}

const Layout: FC<LayoutProps> = (props) =>{
  const {
    children,
    className
  } = props;

  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <h2 className="header__title">Currency</h2>
            <Stack spacing={2} direction="row">
              <Button variant="contained" size="large">Currency Converter</Button>
              <Button variant="contained" size="large">List of Exchange Rates</Button>
            </Stack>
          </div>
        </div>
      </header>
      {children}
    </ div>
  );
}

export default Layout;
