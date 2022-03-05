import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Routes from './routes';
import { uiActions } from './store/UI/ui-slice';
import { Drawer } from './components';

function App() {
  const dispatch = useDispatch();

  const drawerOpen = useSelector((state) => state.ui.isSideDrawerVisible);

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerHandler()}>
        <input />
      </Drawer>
      <Routes />
    </div>
  );
}

export default App;
