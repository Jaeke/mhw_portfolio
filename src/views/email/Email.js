import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { Form, FormikDebug, Input, SubmitButton } from 'formik-antd';

import './Email.style.scss';
import { MenuToggler } from '../../components';
import { formValidation } from '../../Utils/formValidation';

const Email = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  const handleSubmit = (values, actions) => {
    console.log('submitted values: ', values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <div className="email_content_container">
        {width > 716 ? <MenuToggler /> : ''}
        <div className="email_form_container">
          <span className="form_header">connect with me</span>
          <Formik
            initialValues={{
              name: '',
              emailFrom: '',
              emailSubject: '',
              emailMessage: '',
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
              <Form.Item name="emailFrom" label="Email Address">
                <Input
                  name="emailFrom"
                  style={{ width: '100%' }}
                  placeholder="enter your email"
                />
              </Form.Item>
              <Form.Item name="emailSubject" label="Subject">
                <Input
                  name="emailSubject"
                  style={{ width: '100%' }}
                  placeholder="enter email subject"
                />
              </Form.Item>
              <Form.Item name="emailMessage" label="Message">
                <Input.TextArea
                  name="emailMessage"
                  style={{ width: '100%', maxHeight: 350, height: 200 }}
                />
              </Form.Item>
              <div className="form_btn">
                <SubmitButton>Send</SubmitButton>
              </div>
              {/* <FormikDebug /> */}
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Email;
