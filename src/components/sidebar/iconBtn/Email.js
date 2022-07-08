import React from 'react';
import { Envelope } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import './IconBtn.style.scss';

const Email = () => {
  return (
    <NavLink className="icon" weight="thin" to="/email">
      <Envelope />
    </NavLink>
  );
};

export default Email;
