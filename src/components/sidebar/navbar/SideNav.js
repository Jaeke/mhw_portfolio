import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { uiActions } from '../../../store/UI/ui-slice';
import { Email, Instagram, LinkedIn } from '../iconBtn';

import './SideNav.style.scss';

const SideNav = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

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
        <NavLink className="navlink" to="/" onClick={onClickHandler}>
          <div className="hover_effect" />
          <span className="nav_text">home</span>
        </NavLink>
        <NavLink className="navlink" to="/gallery" onClick={onClickHandler}>
          <div className="hover_effect" />
          <span className="nav_text">projects</span>
        </NavLink>
        <NavLink className="navlink" to="/about" onClick={onClickHandler}>
          <div className="hover_effect" />
          <span className="nav_text">mark wesley</span>
        </NavLink>
        <NavLink className="navlink" to="/contact" onClick={onClickHandler}>
          <div className="hover_effect" />
          <span className="nav_text">contact</span>
        </NavLink>
      </div>

      <div className="brand_header_container">
        <span className="studio_name">mhw studio</span>
        <span className="studio_type">interior design</span>
        <span className="studio_type">creative direction</span>
        <span className="contact_num">(917) 232-9955</span>
      </div>

      <div className="widgets_container">
        <Email />
        <LinkedIn />
        <Instagram />
      </div>
    </div>
  );
};

export default SideNav;
