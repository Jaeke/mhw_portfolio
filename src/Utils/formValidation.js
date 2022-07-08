import * as Yup from 'yup';

// must include @ and .com
export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const formValidation = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});
