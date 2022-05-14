import React from 'react';
import { LinkedinLogo } from 'phosphor-react';

import './IconBtn.style.scss';

const LinkedIn = () => {
  return (
    <a
      className="icon"
      href="https://www.linkedin.com/in/mark-wesley-b34877112"
      target={'_blank'}
      rel="noreferrer"
    >
      <LinkedinLogo />
    </a>
  );
};

export default LinkedIn;
