import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ x: '-200px', opacity: 0 }}
          animate={{
            x: '0px',
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1.4,
          }}
        >
          <img
            className="brand_logo"
            src="/images/mhwLogo.png"
            alt="brand logo"
          />
        </motion.div>
      </div>
      <div className="menu_text" onClick={setDrawerHandler}>
        <motion.div
          initial={{ x: '200px', opacity: 0 }}
          animate={{
            x: '0px',
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1.4,
          }}
        >
          menu
        </motion.div>
      </div>
      <div className="brand_header">
        <motion.div
          initial={{ x: '200px', opacity: 0 }}
          animate={{
            x: '-0px',
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1.4,
          }}
        >
          mhw studio | nyc
        </motion.div>
      </div>
      <div className="social_icons">
        <motion.div
          initial={{ x: '-200px', opacity: 0 }}
          animate={{
            x: '0px',
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1.4,
          }}
        >
          <Email />
        </motion.div>

        <motion.div
          initial={{ x: '-200px', opacity: 0 }}
          animate={{
            x: '0px',
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1.5,
          }}
        >
          <LinkedIn />
        </motion.div>

        <motion.div
          initial={{ x: '-200px', opacity: 0 }}
          animate={{
            x: '0px',
            opacity: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1.6,
          }}
        >
          <Instagram />
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
