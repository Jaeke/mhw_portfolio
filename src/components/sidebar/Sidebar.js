import React from 'react';
import { NavLink } from 'react-router-dom';
import { Envelope, LinkedinLogo, InstagramLogo } from 'phosphor-react';

import './Sidebar.style.scss';

const Sidebar = () => {
  return (
    <div className="sidebar_hidden">
      <NavLink className="logo_container" to="/">
        <img
          className="brand_logo"
          src="/images/mhwLogo.png"
          alt="brand logo"
        />
      </NavLink>
      <div className="menu_text">
        <span>menu</span>
      </div>
      <div className="brand_header">
        <span>mhw studio | nyc</span>
      </div>
      <div className="social_icons">
        <div className="icon">
          <Envelope size={38} />
        </div>
        <div className="icon">
          <LinkedinLogo size={38} />
        </div>
        <div className="icon">
          <InstagramLogo size={38} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
