import React from 'react';
import { useDispatch } from 'react-redux';
import { Envelope, LinkedinLogo, InstagramLogo } from 'phosphor-react';

import './Sidebar.style.scss';
import { uiActions } from '../../store/UI/ui-slice';

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
        <div className="icon">
          <Envelope />
        </div>
        <div className="icon">
          <LinkedinLogo />
        </div>
        <div className="icon">
          <InstagramLogo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
