import React from 'react';
import { useDispatch } from 'react-redux';

import './MenuToggler.style.scss';
import { uiActions } from '../../../store/UI/ui-slice';

const MenuToggler = ({ home, projects, about, contact }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <div className="menu_button_container" onClick={onClickHandler}>
      <div className={home ? 'menuBar_home' : 'menuBar'} />
      <div className={projects ? 'menuBar_projects' : 'menuBar'} />
      <div className={about ? 'menuBar_about' : 'menuBar'} />
      <div className={contact ? 'menuBar_contact' : 'menuBar'} />
    </div>
  );
};

export default MenuToggler;
