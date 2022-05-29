import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import './Navbar.style.scss';
import { uiActions } from '../../../store/UI/ui-slice';

const Navbar = () => {
  const dispatch = useDispatch();

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div className="navbar_container">
      <motion.div
        className="logo_container"
        initial={{ x: '-200px', opacity: 0 }}
        animate={{
          x: '0px',
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1,
        }}
        onClick={setDrawerHandler}
      >
        <img
          className="brand_logo"
          src="/images/mhwLogo.png"
          alt="brand logo"
        />
      </motion.div>
      <motion.div
        className="mobile_brand_header"
        initial={{ x: '50px', opacity: 0 }}
        animate={{
          x: '0px',
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1.0,
        }}
        onClick={setDrawerHandler}
      >
        <span>mhw studio</span>
        <span className="brand_border" />
        <span>nyc</span>
      </motion.div>
    </div>
  );
};

export default Navbar;
