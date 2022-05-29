import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Routes from './routes';
import { uiActions } from './store/UI/ui-slice';
import { Drawer, SideNav } from './components';
import Navbar from './components/sidebar/navbar/Navbar';

function App() {
  const dispatch = useDispatch();

  const drawerOpen = useSelector((state) => state.ui.isSideDrawerVisible);

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // console.log(width);
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  return (
    <div>
      {width > 716 ? (
        ''
      ) : (
        <>
          <div className="mobile_navbar">
            <Navbar />
          </div>
          <div className="home_content"></div>
        </>
      )}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerHandler()}>
        <SideNav />
      </Drawer>
      <Routes />
    </div>
  );
}

export default App;
