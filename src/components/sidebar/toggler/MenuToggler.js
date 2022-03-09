import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import './MenuToggler.style.scss';
import { uiActions } from '../../../store/UI/ui-slice';

const MenuToggler = ({ home, projects, about, contact }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <motion.div
      className="menu_button_container"
      onClick={onClickHandler}
      initial={{ x: '-20px', opacity: 0 }}
      animate={{
        x: '0px',
        opacity: 1,
      }}
      transition={{
        type: 'tween',
        duration: 1,
      }}
    >
      <p className="menu_btn_text">menu</p>
    </motion.div>
  );
};

export default MenuToggler;
