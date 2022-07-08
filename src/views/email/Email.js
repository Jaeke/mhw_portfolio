import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form } from 'formik';
import { FormikDebug, Input, SubmitButton } from 'formik-antd';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

import './Email.style.scss';
import { MenuToggler } from '../../components';
import { formValidation } from '../../Utils/formValidation';
import { serviceId, templateId, userId } from '../../api';

// ======== Toast ==========
// msg: string
const errorNotify = (msg) => toast.error(msg);
const successNotify = (msg) => toast.success(msg);

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

  const sendForm = () => {
    emailjs.sendForm(serviceId, templateId, form.current, userId).then(
      (result) => {
        successNotify('Your email has been send');
      },
      (error) => {
        errorNotify('Something went wrong, please try again');
      }
    );
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 8000,
          style: {
            marginTop: '60px',
          },
        }}
      />
      <div className="email_content_container">
        {width > 716 ? <MenuToggler /> : ''}
        <div className="email_form_container">
          <span className="form_header">connect with us</span>
          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              sendForm(values);
            }}
            validationSchema={formValidation}
          >
            {(props) => (
              <Form
                ref={form}
                onReset={props.handleReset}
                onSubmit={props.handleSubmit}
              >
                <FormikDebug />
                {/* <!-- name --> */}
                <div className="form_field">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className={`field_input ${
                      props.touched.name && props.errors.name
                        ? 'input_error'
                        : ''
                    }`}
                    id="name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  {props.touched.name && props.errors.name && (
                    <div className="field_err_msg">{props.errors.name}</div>
                  )}
                </div>

                {/* <!-- email --> */}
                <div className="form_field">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`field_input ${
                      props.touched.email && props.errors.email
                        ? 'input_error'
                        : ''
                    }`}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    values={props.values.email}
                  />
                  {props.touched.email && props.errors.email && (
                    <div className="field_err_msg">{props.errors.email}</div>
                  )}
                </div>

                {/* <!-- subject --> */}
                <div className="form_field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className={`field_input ${
                      props.touched.subject && props.errors.subject
                        ? 'input_error'
                        : ''
                    }`}
                    id="subject"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    values={props.values.subject}
                  />
                  {props.touched.subject && props.errors.subject && (
                    <div className="field_err_msg">{props.errors.subject}</div>
                  )}
                </div>

                <div className="form_field_textarea">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className={`field_input field_textarea ${
                      props.touched.message && props.errors.message
                        ? 'input_error'
                        : ''
                    }`}
                    id="message"
                    name="message"
                    rows="5"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    values={props.values.message}
                  />
                  {props.touched.message && props.errors.message && (
                    <div className="field_err_msg">{props.errors.message}</div>
                  )}
                </div>

                <div className="form_btn_section">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Email;
