import React, { useState, useEffect, useRef } from 'react';
import { Formik } from 'formik';
import { Form, FormikDebug, Input, SubmitButton } from 'formik-antd';
import emailjs from '@emailjs/browser';

import './Email.style.scss';
import { MenuToggler } from '../../components';
import { formValidation } from '../../Utils/formValidation';

const Email = () => {
  const form = useRef();

  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  // const handleSubmit = (values, actions) => {
  //   console.log('submitted values: ', values);

  //   emailjs
  //     .sendForm(
  //       'service_2uqclhw',
  //       'template_hc7wad6',
  //       form.current,
  //       'WVmExMwMvYninowHR'
  //     )
  //     .then(
  //       (result) => {
  //         alert('SUCCESS');
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         alert('FAILED');
  //         console.log(error.text);
  //       }
  //     );

  //   actions.setSubmitting(false);
  //   actions.resetForm();
  // };

  const sendForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        alert('SUCCESS');
        console.log(result.text);
      },
      (error) => {
        alert('FAILED');
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className="email_content_container">
        {width > 716 ? <MenuToggler /> : ''}
        <div className="email_form_container">
          <span className="form_header">connect with me</span>
          <form ref={form} onSubmit={sendForm}>
            {/* <!-- name --> */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                style={{ minHeight: 134, maxHeight: 616 }}
              ></textarea>
            </div>

            <div className="form_btn_section">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Email;
