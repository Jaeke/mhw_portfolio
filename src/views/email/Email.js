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
          {/* <Formik
            ref={form}
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={formValidation}
          >
            <Form
              className="email_form"
              labelCol={{ xs: 4 }}
              wrapperCol={{ xs: 20 }}
            >
              <Form.Item name="name" label="Name">
                <Input
                  name="name"
                  style={{ width: '100%' }}
                  placeholder="enter your name"
                />
              </Form.Item>
              <Form.Item name="email" label="Email Address">
                <Input
                  name="email"
                  style={{ width: '100%' }}
                  placeholder="enter your email"
                />
              </Form.Item>
              <Form.Item name="subject" label="Subject">
                <Input
                  name="subject"
                  style={{ width: '100%' }}
                  placeholder="enter email subject"
                />
              </Form.Item>
              <Form.Item name="message" label="Message">
                <Input.TextArea
                  name="message"
                  style={{ width: '100%', maxHeight: 350, height: 200 }}
                />
              </Form.Item>
              <div className="form_btn">
                <SubmitButton>Send</SubmitButton>
              </div>
            </Form>
          </Formik> */}
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
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Email;
