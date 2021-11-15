import React from 'react';
import {useDispatch} from 'react-redux';

import {changeTab} from '../../store/actions';
import {getActiveTabName} from '../../store/currencies/selectors';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Button from '@mui/material/Button';
import {tabActiveNames} from '../../const';

import Stack from '@mui/material/Stack';

function Tabs() {
  const activeTabName = useTypedSelector(getActiveTabName);
  const dispatch = useDispatch();

  const handleTabClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(changeTab(evt.currentTarget.getAttribute('data-group')));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <Stack spacing={2} direction="row" justifyContent="space-between" mb={5}>
          {Object.values(tabActiveNames).map((group) => (
            <Button
              href="/"
              data-group={group}
              variant="contained"
              size="large"
              key={group}
              onClick={handleTabClick}
            >
              {group}
            </Button>
          ))}
        </Stack>
      </section>
    </div>
  );
};


export default Tabs;