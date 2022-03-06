import React from 'react';
import { useDispatch } from 'react-redux';

import './MenuToggler.style.scss';
import { uiActions } from '../../../store/UI/ui-slice';

const MenuToggler = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div className="menu_button_container" onClick={onClickHandler}>
      <div className="menuBar home" />
      <div className="menuBar projects" />
      <div className="menuBar about" />
      <div className="menuBar contact" />
    </div>
  );
};

export default MenuToggler;
