import React from 'react';
import { Envelope } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import './IconBtn.style.scss';
import { uiActions } from '../../../store/UI/ui-slice';
import { useDispatch } from 'react-redux';

const Email = () => {
  const dispatch = useDispatch();

  const emailIconHandler = () => {
    console.log('email');
    dispatch(uiActions.setSideDrawerVisible());
  };

  return (
    <NavLink
      className="icon"
      weight="thin"
      to="/email"
      onClick={emailIconHandler}
    >
      <Envelope />
    </NavLink>
  );
};

export default Email;
