import React from 'react';
import { MenuToggler } from '../../components';

const Contact = () => {
  return (
    <div>
      <MenuToggler contact={true} />
      <p>This is contact page</p>
    </div>
  );
};

export default Contact;
