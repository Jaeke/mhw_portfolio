import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MenuToggler } from '../../components';
import './Contact.style.scss';

const ContactPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  return (
    <div className="contact_page_container">
      {width > 716 ? (
        <>
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                <span className="contact_header">contact</span>
                <span className="contact_underline" />
              </div>
              <div className="header_sub_text">Mark@MHWstudio.com</div>
              <div className="header_sub_text">(917) 232-9955 </div>
              <div className="header_sub_text">New York, NY</div>
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div
          className="mobile_contact_content"
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
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <span className="contact_header">contact</span>
              <span className="contact_underline" />
            </div>
            <div className="header_sub_text">Mark@MHWstudio.com</div>
            <div className="header_sub_text">(917) 232-9955 </div>
            <div className="header_sub_text">New York, NY</div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;
