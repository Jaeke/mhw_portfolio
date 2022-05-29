import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import './Sidebar.style.scss';
import { uiActions } from '../../store/UI/ui-slice';
import { Email, LinkedIn, Instagram, Pinterest } from './iconBtn';

const Sidebar = () => {
  const dispatch = useDispatch();

  const setDrawerHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setHeight(window.innerHeight);
  };

  // 569 height for horizontal mobile screen
  useEffect(() => {
    // console.log(height);
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

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

      {height > 415 ? (
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
      ) : (
        <div></div>
      )}

      {height > 350 ? (
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
      ) : (
        <div></div>
      )}

      {height > 536 ? (
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
            <Pinterest />
          </motion.div>

          <motion.div
            initial={{ x: '-200px', opacity: 0 }}
            animate={{
              x: '0px',
              opacity: 1,
            }}
            transition={{
              type: 'tween',
              duration: 1.8,
            }}
          >
            <Instagram />
          </motion.div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
