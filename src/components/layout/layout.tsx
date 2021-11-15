import {FC} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import CenteredTabs from '../tabs/tabs';
import Tabs from '../tabs/tabs';
import {activeTabNames} from '../../const';

interface LayoutProps {
  className?: string;
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
          <Tabs />
        </div>
      </header>
      <Divider />
      {children}
    </ div>
  );
}

export default Layout;
