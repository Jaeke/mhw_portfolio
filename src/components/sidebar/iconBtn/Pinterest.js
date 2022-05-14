import React from 'react';
import { PinterestLogo } from 'phosphor-react';

import './IconBtn.style.scss';

const Pinterest = () => {
  return (
    <a
      className="icon"
      weight="regular"
      href="https://www.pinterest.com/"
      target={'_blank'}
      rel="noreferrer"
    >
      <PinterestLogo />
    </a>
  );
};

export default Pinterest;
