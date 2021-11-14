import {FC} from 'react';
import withLayout from '../hocs/with-layout';

const Main: FC = () => {
  return (
    <p className="page page--gray page--index"></p>
  );
};

const withLayoutMain = withLayout(Main);
export default withLayoutMain;