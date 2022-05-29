import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { uiActions } from '../../../store/UI/ui-slice';
import { Email, Instagram, LinkedIn, Pinterest } from '../iconBtn';

import './SideNav.style.scss';

const SideNav = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // console.log(height);
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  return (
    <div>
      {height > 512 ? (
        <>
          <div className="logo_container" onClick={onClickHandler}>
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
            <Pinterest />
            <Instagram />
          </div>
        </>
      ) : (
        <>
          <div className="mobile_sidebar_header">
            <div className="logo_container" onClick={onClickHandler}>
              <img
                className="brand_logo"
                src="/images/mhwLogo.png"
                alt="brand logo"
              />
            </div>
            <div className="mobile_brand_header_container">
              <span className="studio_name">mhw studio</span>
              <span className="studio_type">interior design</span>
              <span className="studio_type">creative direction</span>
              <span className="contact_num">(917) 232-9955</span>
            </div>

            <div className="mobile_navlinks_container">
              <NavLink className="navlink" to="/" onClick={onClickHandler}>
                <span className="nav_text">home</span>
              </NavLink>
              <NavLink
                className="navlink"
                to="/gallery"
                onClick={onClickHandler}
              >
                <span className="nav_text">projects</span>
              </NavLink>
              <NavLink className="navlink" to="/about" onClick={onClickHandler}>
                <span className="nav_text">mark wesley</span>
              </NavLink>
              <NavLink
                className="navlink"
                to="/contact"
                onClick={onClickHandler}
              >
                <span className="nav_text">contact</span>
              </NavLink>
            </div>

            <div className="widgets_container">
              <Email />
              <LinkedIn />
              <Pinterest />
              <Instagram />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideNav;
