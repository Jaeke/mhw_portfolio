import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideNav.style.scss';

const SideNav = () => {
  return (
    <div>
      <div className="logo_container">
        <img
          className="brand_logo"
          src="/images/mhwLogo.png"
          alt="brand logo"
        />
      </div>
      <div className="navlinks_container">
        <NavLink className="navlink" to="/">
          <div className="hover_effect" />
          <span className="nav_text">home</span>
        </NavLink>
        <NavLink className="navlink" to="/gallery">
          <div className="hover_effect" />
          <span className="nav_text">projects</span>
        </NavLink>
        <NavLink className="navlink" to="/about">
          <div className="hover_effect" />
          <span className="nav_text">mark wesley</span>
        </NavLink>
        <NavLink className="navlink" to="/contact">
          <div className="hover_effect" />
          <span className="nav_text">contact</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
