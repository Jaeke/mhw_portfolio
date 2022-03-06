import React from 'react';
import { useDispatch } from 'react-redux';

import './Sidebar.style.scss';
import { uiActions } from '../../store/UI/ui-slice';
import { Email, LinkedIn, Instagram } from './iconBtn';

const Sidebar = () => {
  const dispatch = useDispatch();

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div className="sidebar_hidden">
      <div className="logo_container" onClick={setDrawerHandler}>
        <img
          className="brand_logo"
          src="/images/mhwLogo.png"
          alt="brand logo"
        />
      </div>
      <div className="menu_text" onClick={setDrawerHandler}>
        <span>menu</span>
      </div>
      <div className="brand_header">
        <span>mhw studio | nyc</span>
      </div>
      <div className="social_icons">
        <Email />
        <LinkedIn />
        <Instagram />
      </div>
    </div>
  );
};

export default Sidebar;
