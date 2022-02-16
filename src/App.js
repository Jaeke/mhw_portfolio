import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Routes from './routes';
import SideDrawer from './components/Overlay/Drawer';
import { uiActions } from './store/UI/ui-slice';

function App() {
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector((state) => state.ui.isSideDrawerVisible);

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div>
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setDrawerHandler()}>
        <div>Hello there I am open!</div>
      </SideDrawer>
      <Routes />
    </div>
  );
}

export default App;
