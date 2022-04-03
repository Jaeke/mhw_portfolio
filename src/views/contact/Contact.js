import React from 'react';
import { motion } from 'framer-motion';

import { MenuToggler } from '../../components';
import './Contact.style.scss';

const Contact = () => {
  return (
    <div className="contact_page_container">
      <MenuToggler contact={true} />
      <motion.div
        className="contact_content"
        initial={{ x: '-200px', opacity: 0 }}
        animate={{
          x: '0px',
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1,
        }}
      >
        <div className="contact_body">
          <span className="contact_header">contact</span>
          <div>Mark@MHWstudio.com</div>
          <div>(917) 232-9955 </div>
          <div>New York, NY</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
