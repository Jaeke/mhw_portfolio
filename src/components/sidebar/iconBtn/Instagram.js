import React from 'react';
import { InstagramLogo } from 'phosphor-react';

import './IconBtn.style.scss';

const Instagram = () => {
  return (
    <a
      className="icon"
      weight="thin"
      href="https://instagram.com/mhwstudio?igshid=YmMyMTA2M2Y="
      target={'_blank'}
      rel="noreferrer"
    >
      <InstagramLogo />
    </a>
  );
};

export default Instagram;
