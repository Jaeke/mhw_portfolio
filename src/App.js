import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Routes from './routes';
import { uiActions } from './store/UI/ui-slice';

function App() {
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector((state) => state.ui.isSideDrawerVisible);

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
