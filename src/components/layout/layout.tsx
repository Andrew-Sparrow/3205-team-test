import {FC} from 'react';

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
            <div className="header__left">
              <button>Converter</button>
              <button>Currency List</button>
            </div>
          </div>
        </div>
      </header>
      {children}
    </ div>
  );
}

export default Layout;
